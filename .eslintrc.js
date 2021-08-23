module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    
   
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: false,
  env: {
    node: true,
    jest: true,
  },"prettier/prettier": ["error", {}, {
    "usePrettierrc": true
  }],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-empty-function": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  
};
