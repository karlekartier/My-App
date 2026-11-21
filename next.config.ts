import type { NextConfig } from "next";

// When building on GitHub Actions for GitHub Pages, use /My-App repo basePath and static export.
// When deploying to Vercel or running locally, serve from root ("") without static export de-opts.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? "/My-App" : (process.env.NEXT_PUBLIC_BASE_PATH || "");

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" } : {}),
  basePath,
  assetPrefix: isGithubActions ? "/My-App" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
