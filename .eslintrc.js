module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'react-native/no-inline-styles': 0,
  },
  plugins: ['import', '@tanstack/query'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@tanstack/query/exhaustive-deps': 'error',
        '@tanstack/query/prefer-query-object-syntax': 'error',
        '@tanstack/query/stable-query-client': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@+(routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always-and-inside-groups',
          },
        ],
      },
    },
  ],
};
