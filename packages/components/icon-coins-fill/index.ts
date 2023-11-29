import type { App } from 'vue';
import _IconCoinsFill from './icon-coins-fill.vue';

const IconCoinsFill = Object.assign(_IconCoinsFill, {
  install: (app: App) => {
    app.component(_IconCoinsFill.name, _IconCoinsFill);
  }
});

export default IconCoinsFill;