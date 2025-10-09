import path from "path";
import type { NextConfig } from "next";

const nextConfig = {
  // Explicitly set turbopack.root so Next.js doesn't try to infer the workspace
  // root (which can log a warning when multiple lockfiles are present).
  turbopack: {
    root: path.resolve(__dirname),
  },

  /* config options here */
} as NextConfig;

export default nextConfig;