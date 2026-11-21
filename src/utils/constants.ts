// Detect base path across environments:
// 1. Explicit environment variable (NEXT_PUBLIC_BASE_PATH)
// 2. GitHub Actions CI environment (GITHUB_ACTIONS === "true")
// 3. Browser runtime check (GitHub Pages URL: *.github.io or /My-App path)
// 4. Default to "" for Vercel and local development
const resolveBasePath = (): string => {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (process.env.GITHUB_ACTIONS === "true") {
    return "/My-App";
  }
  if (typeof window !== "undefined") {
    if (
      window.location.hostname.endsWith("github.io") ||
      window.location.pathname.startsWith("/My-App")
    ) {
      return "/My-App";
    }
  }
  return "";
};

export const BASE_PATH = resolveBasePath();
export const ASSETS_PREFIX = resolveBasePath();
