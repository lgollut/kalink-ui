// @ts-check

/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  extends: [
    '@kalink-ui/eslint-config/react.js',
    'plugin:storybook/recommended',
  ],
  rules: {
    'import/no-default-export': 'off',
  },
};
