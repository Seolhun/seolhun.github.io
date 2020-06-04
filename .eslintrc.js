module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/eslint-recommended'],
  plugins: ['@typescript-eslint', 'eslint-plugin', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    // TODO: Will be Removed
    'import/no-cycle': 0,
    'mouse-events-have-key-events': 0,
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 0,

    // JSX
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    // React
    'react/prop-types': 0, // typescript 충돌
    'react-hooks/exhaustive-deps': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': ['error', { arrow: true, return: true, declaration: true }],
  },
  settings: {
    'prettier/prettier': 'error',
  },
};
