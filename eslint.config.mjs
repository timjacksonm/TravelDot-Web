// @ts-check

import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

// update / add as the project grows
export default defineConfig(
  globalIgnores(["dist/", ".astro/"]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
);
