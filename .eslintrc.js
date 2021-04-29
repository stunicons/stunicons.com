module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {},
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  }
}
