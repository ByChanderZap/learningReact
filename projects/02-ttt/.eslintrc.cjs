module.exports = {
  env: {
    browser: true,
    node: false,
    es2021: true,
  },
  extends: ['./node_modules/standard/eslintrc.json', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 4,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'arrow-parens': ['error', 'always', { requireForBlockBody: false }],
    'object-curly-spacing': ['error', 'always'],
  },
}
