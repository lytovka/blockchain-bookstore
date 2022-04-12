module.exports = {
  extends: ['eslint:recommended', 'next'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:typescript-sort-keys/recommended',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['typescript-sort-keys'],
      rules: {
        '@typescript-eslint/array-type': [
          'warn',
          { default: 'generic', readonly: 'generic' },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'typescript-sort-keys/interface': 'warn',
      },
    },
  ],
  plugins: ['sort-destructure-keys', 'sort-keys-fix'],
  root: true,
  rules: {
    'no-console': 'warn',
    'no-unneeded-ternary': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
