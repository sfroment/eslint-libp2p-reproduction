import js from "@eslint/js";
import tseslint from 'typescript-eslint'
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      "import/resolver": {
        typescript: {}
      }
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
    }
  }
);
