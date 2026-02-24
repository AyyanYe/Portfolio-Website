/**
 * Derive raw README URL from a GitHub repository URL.
 * Supports github.com/owner/repo and optional branch (default: main, fallback: master).
 */
export function getReadmeUrl(sourceCodeLink, branch = "main") {
  if (!sourceCodeLink || typeof sourceCodeLink !== "string") return null;
  try {
    const match = sourceCodeLink.match(/github\.com[/]([^/]+)[/]([^/]+?)(?:[/]|$)/i);
    if (!match) return null;
    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, "");
    return `https://raw.githubusercontent.com/${owner}/${cleanRepo}/${branch}/README.md`;
  } catch {
    return null;
  }
}

/**
 * Fetch README content from a URL (e.g. raw GitHub).
 * Returns { content, error }.
 */
export async function fetchReadme(url) {
  if (!url) return { content: null, error: "No URL" };
  try {
    const res = await fetch(url, { cache: "default" });
    if (!res.ok) return { content: null, error: res.status === 404 ? "README not found" : `Failed to load (${res.status})` };
    const text = await res.text();
    return { content: text, error: null };
  } catch (e) {
    return { content: null, error: e.message || "Network error" };
  }
}
