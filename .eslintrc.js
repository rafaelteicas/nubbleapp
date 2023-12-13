module.exports = {
  root: true,
  extends: [
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@react-native',
  ],
  plugins: ['@tanstack/query', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-native/no-inline-styles': 0,
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
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
