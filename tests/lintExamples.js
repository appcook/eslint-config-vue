const path = require('path');
const spawnProcess = require('./utils/spawnProcess');

function resolve(url) {
  return path.join(__dirname, url);
}

spawnProcess(resolve('../examples/vite-vue'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/vite-vue-tsx'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/vuecli-vue2'), 'npm', ['run', 'lint']);

spawnProcess(resolve('../examples/viecli-vue3'), 'npm', ['run', 'lint']);
