const ESLint = require('eslint').ESLint;
const eslintConfig = require('../index.js');
const path = require('path');
const { getErrorCount, getErrorMessages } = require('./utils/resultParser');

const eslint = new ESLint({
  baseConfig: eslintConfig,
});

function resolve(filepath) {
  return path.join(__dirname, filepath);
}

test('Test config worked', () => {
  return eslint.lintText(`const a = 1`).then((results) => {
    const errorCount = getErrorCount(results);
    const errorMessages = getErrorMessages(results);

    expect(errorCount).toBe(1);
    expect(errorMessages.length).toBe(1);
  });
});

test('Test lint Vue files', () => {
  return eslint
    .lintFiles([resolve('../examples/vite-vue/src/App.vue')])
    .then((results) => {
      const errorCount = getErrorCount(results);
      const errorMessages = getErrorMessages(results);

      expect(errorCount).toBe(1);
      expect(errorMessages.length).toBe(1);
    });
});

test('Test lint ts?(x) files', () => {
  return eslint
    .lintFiles([
      resolve('../examples/vite-vue-tsx/src/main.ts'),
      resolve('../examples/vite-vue-tsx/src/App.tsx'),
    ])
    .then((results) => {
      const errorCount = getErrorCount(results);
      const errorMessages = getErrorMessages(results);

      expect(errorCount).toBe(2);
      expect(errorMessages.length).toBe(2);
    });
});
