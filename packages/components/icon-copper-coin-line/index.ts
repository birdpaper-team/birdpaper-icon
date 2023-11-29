import type { App } from 'vue';
import _IconCopperCoinLine from './icon-copper-coin-line.vue';

const IconCopperCoinLine = Object.assign(_IconCopperCoinLine, {
  install: (app: App) => {
    app.component(_IconCopperCoinLine.name, _IconCopperCoinLine);
  }
});

export default IconCopperCoinLine;