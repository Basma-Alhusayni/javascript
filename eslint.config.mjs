import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      quotes: ['error', 'single'],
      'no-var': 'error',
      eqeqeq: 'error',
      'no-unused-vars': 'error',
      'default-case': 'error',
      camelcase: 'error',
      'consistent-return': 'error',
      'max-depth': ['error', 2],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'no-useless-return': 'error',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
