export interface RepoData {
  full_name?: string;
  name?: string;
  stargazers_count?: number;
  forks_count?: number;
  language?: string | null;
  pushed_at?: string;
}

const cache = new Map<string, Promise<RepoData | null>>();

/** Build-time GitHub lookup. Uses GITHUB_TOKEN when present (CI) to avoid rate limits. */
export function fetchRepo(repo: string): Promise<RepoData | null> {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) return Promise.resolve(null);
  let pending = cache.get(repo);
  if (!pending) {
    const headers: Record<string, string> = {
      'User-Agent': 'RoeeIlouz-Portfolio-Build',
      Accept: 'application/vnd.github+json'
    };
    const token = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;
    pending = fetch(`https://api.github.com/repos/${repo}`, { headers, signal: AbortSignal.timeout(8000) })
      .then((res) => (res.ok ? (res.json() as Promise<RepoData>) : null))
      .catch(() => null);
    cache.set(repo, pending);
  }
  return pending;
}
