import type { App } from 'vue';
import _IconHandCoinLine from './icon-hand-coin-line.vue';

const IconHandCoinLine = Object.assign(_IconHandCoinLine, {
  install: (app: App) => {
    app.component(_IconHandCoinLine.name, _IconHandCoinLine);
  }
});

export default IconHandCoinLine;