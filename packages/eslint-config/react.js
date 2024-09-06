const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),

  parserOptions: {
    project,
  },

  globals: {
    JSX: true,
  },

  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },

  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],

  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "parent",
          },
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
