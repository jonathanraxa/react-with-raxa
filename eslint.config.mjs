// eslint.config.mjs
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import airbnbBase from 'eslint-config-airbnb-base';
import airbnbHooks from 'eslint-config-airbnb/rules/react-hooks';
import airbnb from 'eslint-config-airbnb/rules/react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbHooks.rules,
      ...airbnb.rules,
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    },
  },
];
