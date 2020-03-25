module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/typescript',
    '@vue/prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'prettier/prettier': 'error',
    'lines-between-class-members': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
