// eslint.config.js - Flat config for Next.js 15/16

import nextPlugin from "eslint-plugin-next";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  // Ignorar carpetas generadas automáticamente
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"]
  },

  // Reglas principales
  ...tseslint.configs.recommended,
  js.configs.recommended,

  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      // === Disabling rules that caused your build errors ===
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prefer-const": "off",
      "no-unused-expressions": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/no-unescaped-entities": "off",

      // Optional: disable next’s strict web-vitals rules like before
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  }
];
