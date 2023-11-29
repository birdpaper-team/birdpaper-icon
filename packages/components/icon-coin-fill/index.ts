import type { App } from 'vue';
import _IconCoinFill from './icon-coin-fill.vue';

const IconCoinFill = Object.assign(_IconCoinFill, {
  install: (app: App) => {
    app.component(_IconCoinFill.name, _IconCoinFill);
  }
});

export default IconCoinFill;