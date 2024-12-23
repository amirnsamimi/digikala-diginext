import type { NextConfig } from "next";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpackDevMiddleware: (config:Configuration) => {
    config.watchOptions = {
      poll: 1000, // Check for file changes every second
      aggregateTimeout: 300, // Add a delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
