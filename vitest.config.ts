import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["scripts/**/__tests__/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["scripts/**/*.ts"],
      exclude: ["scripts/**/__tests__/**", "scripts/**/dist/**"],
    },
  },
});
