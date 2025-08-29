
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environment: "jsdom",
        setupFiles: ["./test/setup.ts"],
        include: ["test/**/*.test.ts", "test/**/*.test.tsx"],
        css: true,
        // globals: true, // ← not required when using jest-dom/vitest
      }
      
});
