import type { App } from 'vue';
import _IconCoinLine from './icon-coin-line.vue';

const IconCoinLine = Object.assign(_IconCoinLine, {
  install: (app: App) => {
    app.component(_IconCoinLine.name, _IconCoinLine);
  }
});

export default IconCoinLine;