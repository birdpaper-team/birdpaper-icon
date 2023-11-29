import type { App } from 'vue';
import _IconHandCoinFill from './icon-hand-coin-fill.vue';

const IconHandCoinFill = Object.assign(_IconHandCoinFill, {
  install: (app: App) => {
    app.component(_IconHandCoinFill.name, _IconHandCoinFill);
  }
});

export default IconHandCoinFill;