import type { App } from 'vue';
import _IconBitCoinFill from './icon-bit-coin-fill.vue';

const IconBitCoinFill = Object.assign(_IconBitCoinFill, {
  install: (app: App) => {
    app.component(_IconBitCoinFill.name, _IconBitCoinFill);
  }
});

export default IconBitCoinFill;