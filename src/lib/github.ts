export interface GithubStats {
  repos: number;
  stars: number;
  followers: number;
}

const USER = "chila254";
const CACHE_SECONDS = 3600;

let cached: { stats: GithubStats; at: number } | null = null;

export async function getGithubStats(): Promise<GithubStats | null> {
  if (cached && Date.now() - cached.at < CACHE_SECONDS * 1000) return cached.stats;

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const userRes = await fetch(`https://api.github.com/users/${USER}`, {
      headers,
      next: { revalidate: CACHE_SECONDS },
    });
    if (!userRes.ok) return cached?.stats ?? null;
    const user = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner`, {
      headers,
      next: { revalidate: CACHE_SECONDS },
    });
    const repos: { fork: boolean; stargazers_count: number }[] = reposRes.ok ? await reposRes.json() : [];

    const stats: GithubStats = {
      repos: user.public_repos ?? 0,
      stars: repos.filter((r) => !r.fork).reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0),
      followers: user.followers ?? 0,
    };
    cached = { stats, at: Date.now() };
    return stats;
  } catch {
    return cached?.stats ?? null;
  }
}
