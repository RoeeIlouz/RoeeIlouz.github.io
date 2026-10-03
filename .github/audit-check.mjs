// Fails the build on any high or critical npm advisory, except advisory IDs listed in AUDIT_ALLOW
// (comma-separated GHSA IDs). Reads `npm audit --json` output from the file given as the first argument.
// Unreadable or unexpected audit output fails too, so a broken audit never passes silently.
import { readFileSync } from 'node:fs';

const allow = new Set((process.env.AUDIT_ALLOW || '').split(',').map((s) => s.trim()).filter(Boolean));
const blocking = new Set(['high', 'critical']);

let report;
try {
  report = JSON.parse(readFileSync(process.argv[2], 'utf8'));
} catch (e) {
  console.error(`Could not read the npm audit report: ${e.message}`);
  process.exit(1);
}
if (!report || typeof report.vulnerabilities !== 'object') {
  console.error('The npm audit report has no "vulnerabilities" section.');
  process.exit(1);
}

const found = new Map();
for (const vuln of Object.values(report.vulnerabilities)) {
  for (const via of vuln.via || []) {
    // Strings are transitive references; the advisory itself is listed under its own package.
    if (typeof via !== 'object' || !blocking.has(via.severity)) continue;
    const id = String(via.url || '').split('/').pop() || `${via.name}:${via.source}`;
    found.set(id, `${via.severity}  ${via.name}  ${via.title}  ${via.url || ''}`);
  }
}

let failed = false;
for (const [id, line] of found) {
  if (allow.has(id)) {
    console.log(`allowed  ${id}  ${line}`);
  } else {
    console.error(`BLOCKING ${id}  ${line}`);
    failed = true;
  }
}
for (const id of allow) {
  if (!found.has(id)) console.log(`note: ${id} is allowlisted but no longer reported; remove it from AUDIT_ALLOW.`);
}
if (failed) process.exit(1);
console.log(`npm audit: no blocking advisories (${found.size} high/critical found, all allowlisted).`);
