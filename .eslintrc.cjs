module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens
  // into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  },

  env: {
    es2021: true,
    node: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'airbnb-base',
    'airbnb-babel',
  ],

  // add your custom rules here
  rules: {
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'import/extensions': ['error', 'always'],
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-await-in-loop': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
    }],
    'max-classes-per-file': 'off',
    'spaced-comment': 'off',
    'no-unreachable': 'warn',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  overrides: [{
    files: [
      '**/*.test.js',
    ],

    plugins: [
      'jest',
    ],

    env: {
      'jest/globals': true,
    },
  }],
};
