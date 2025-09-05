import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  js.config({
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        JSX: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
    },
  }),
  react.config({
    files: ['**/*.jsx', '**/*.tsx'],
  }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
    },
  },
  prettier.config({
    files: ['**/*.{js,jsx,ts,tsx}'],
  }),
];
