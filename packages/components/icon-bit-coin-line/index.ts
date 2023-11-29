import type { App } from 'vue';
import _IconBitCoinLine from './icon-bit-coin-line.vue';

const IconBitCoinLine = Object.assign(_IconBitCoinLine, {
  install: (app: App) => {
    app.component(_IconBitCoinLine.name, _IconBitCoinLine);
  }
});

export default IconBitCoinLine;