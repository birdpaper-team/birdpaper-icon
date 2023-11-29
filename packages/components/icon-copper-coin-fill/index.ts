import type { App } from 'vue';
import _IconCopperCoinFill from './icon-copper-coin-fill.vue';

const IconCopperCoinFill = Object.assign(_IconCopperCoinFill, {
  install: (app: App) => {
    app.component(_IconCopperCoinFill.name, _IconCopperCoinFill);
  }
});

export default IconCopperCoinFill;