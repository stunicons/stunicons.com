module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/base'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {},
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  }
}
