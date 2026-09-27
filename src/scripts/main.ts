import { relativeTime } from '../lib/time';

const lang = document.documentElement.lang || 'en';

/* ---------- Toast ---------- */
let toastTimer: number | undefined;
function showToast(message: string) {
  const toast = document.getElementById('toast');
  if (!toast || !message) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

/* ---------- Legacy tab hashes (#skills was renamed) ---------- */
if (location.hash === '#skills') {
  history.replaceState(null, '', '#experience');
  document.getElementById('experience')?.scrollIntoView();
}

/* ---------- Scrollspy + language toggle keeps your place ---------- */
const navLinks = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach((a) => navLinks.set(a.dataset.nav!, a));
const langToggle = document.querySelector<HTMLAnchorElement>('[data-lang-toggle]');
const langBase = langToggle?.getAttribute('href')?.split('#')[0] ?? '/';

function setActive(id: string) {
  navLinks.forEach((link, key) => {
    if (key === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  if (langToggle) langToggle.href = `${langBase}#${id}`;
}

const sections = [...navLinks.keys()]
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => el !== null);

if ('IntersectionObserver' in window && sections.length) {
  const visible = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      const current = sections.find((s) => visible.has(s.id));
      if (current) setActive(current.id);
    },
    { rootMargin: '-35% 0px -60% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------- Project search & filter ---------- */
const searchInput = document.getElementById('project-search') as HTMLInputElement | null;
const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const projectCards = document.querySelectorAll<HTMLElement>('.project-card');
const emptyState = document.getElementById('no-projects');
let activeFilter = 'all';

function applyFilters() {
  const query = (searchInput?.value ?? '').trim().toLowerCase();
  let shown = 0;
  projectCards.forEach((card) => {
    const matchCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchQuery = !query || (card.dataset.search ?? '').includes(query);
    const show = matchCategory && matchQuery;
    card.hidden = !show;
    if (show) shown++;
  });
  if (emptyState) emptyState.hidden = shown !== 0;
}

searchInput?.addEventListener('input', applyFilters);
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter ?? 'all';
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    applyFilters();
  });
});

/* ---------- Live GitHub stats (one request, cached per session) ---------- */
interface Repo {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
}

const CACHE_KEY = 'gh-repos-v1';
const CACHE_TTL = 10 * 60 * 1000;

function readCache(): Repo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw);
    return Date.now() - at < CACHE_TTL && Array.isArray(repos) ? repos : null;
  } catch {
    return null;
  }
}

function writeCache(repos: Repo[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    /* storage unavailable: ignore */
  }
}

function sanitize(list: unknown): Repo[] {
  if (!Array.isArray(list)) return [];
  return list
    .filter((r) => r && typeof r.full_name === 'string')
    .map((r) => ({
      full_name: String(r.full_name),
      stargazers_count: Number(r.stargazers_count) || 0,
      forks_count: Number(r.forks_count) || 0,
      language: typeof r.language === 'string' ? r.language : null,
      pushed_at: typeof r.pushed_at === 'string' ? r.pushed_at : ''
    }));
}

async function loadRepos(): Promise<Repo[]> {
  const cached = readCache();
  if (cached) return cached;
  const res = await fetch('https://api.github.com/users/RoeeIlouz/repos?per_page=100&sort=pushed', {
    headers: { Accept: 'application/vnd.github+json' },
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
  });
  if (!res.ok) return [];
  const repos = sanitize(await res.json());
  writeCache(repos);
  return repos;
}

async function refreshGithubStats() {
  const blocks = document.querySelectorAll<HTMLElement>('[data-github-repo]');
  if (!blocks.length) return;
  let repos: Repo[];
  try {
    repos = await loadRepos();
  } catch {
    return; // keep build-time values
  }
  const byName = new Map(repos.map((r) => [r.full_name.toLowerCase(), r]));

  blocks.forEach((block) => {
    const repo = byName.get((block.dataset.githubRepo ?? '').toLowerCase());
    if (!repo) return;
    const set = (sel: string, value: string) => {
      const el = block.querySelector(sel);
      if (el) el.textContent = value;
    };
    set('[data-gh-stars]', String(repo.stargazers_count));
    set('[data-gh-forks]', String(repo.forks_count));
    if (repo.language) {
      set('[data-gh-lang-name]', repo.language);
      const langEl = block.querySelector<HTMLElement>('[data-gh-lang]');
      if (langEl) langEl.dataset.lang = repo.language;
    }
    const time = block.querySelector<HTMLTimeElement>('[data-gh-updated]');
    if (time && repo.pushed_at) {
      time.dateTime = repo.pushed_at;
      time.textContent = relativeTime(repo.pushed_at, lang);
      time.parentElement?.removeAttribute('hidden');
    }
  });
}

if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(() => void refreshGithubStats());
else setTimeout(() => void refreshGithubStats(), 500);

/* ---------- Contact ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const email = btn.dataset.copyEmail ?? '';
    try {
      await navigator.clipboard.writeText(email);
      showToast(btn.dataset.toast ?? '');
    } catch {
      showToast(email);
    }
  });
});

const form = document.getElementById('contact-form') as HTMLFormElement | null;
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const clean = (key: string, max: number) => String(data.get(key) ?? '').trim().slice(0, max);
  const name = clean('name', 100).replace(/[\r\n]+/g, ' ');
  const from = clean('email', 200).replace(/[\r\n]+/g, '');
  const message = clean('message', 2000);

  const subject = `Contact from roee.ilouz.xyz (${name})`;
  const body = `${message}\n\n— ${name} <${from}>`;
  const to = form.dataset.email ?? '';
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showToast(form.dataset.toast ?? '');
  form.reset();
});
