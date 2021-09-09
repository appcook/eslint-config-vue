# @appcook/eslint-config-vue

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-download-image]][npm-url]
[![node engine][node-engine-image]][npm-url]

[npm-version-image]: https://img.shields.io/npm/v/@appcook/eslint-config-vue.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dm/@appcook/eslint-config-vue.svg?style=flat-square
[node-engine-image]: https://img.shields.io/badge/node-%3E=10.12.0-blue.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appcook/eslint-config-vue

ESLint configuration for Vue web application

## Usage

Install this package:

```shell
# use yarn
yarn add @appcook/eslint-config-vue --dev


# use npm
npm install @appcook/eslint-config-vue --save-dev
```

Then config your `.eslinrc` file:

```js
{
  "extends": "@appcook/vue"
  "rules": {
    // add your own rules to overwrite
  }
}
```
