import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/editorial-argenta" : "",
  assetPrefix: isGitHubPages ? "/editorial-argenta/" : "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: isGitHubPages,
  },
};

export default nextConfig;
