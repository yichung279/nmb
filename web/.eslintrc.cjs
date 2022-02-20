require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript/recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },
  rules: {
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Vue, imports
          ['^vue'],
          // Side effect imports.
          ['^\\u0000'],
          // Packages
          // Things that start with a letter (or digit or underscore)
          ['^\\w'],
          // Packages.
          // Things that start with a @. usually @material-ui
          ['^@\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          // Relative imports.
          // Anything that starts with a dot.
          ['^[^.]', '^\\.'],
        ],
      },
    ],
  },
}
