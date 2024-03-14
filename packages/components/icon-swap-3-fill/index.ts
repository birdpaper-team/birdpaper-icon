import type { App } from 'vue';
import _IconSwap3Fill from './icon-swap-3-fill.vue';

const IconSwap3Fill = Object.assign(_IconSwap3Fill, {
  install: (app: App) => {
    app.component(_IconSwap3Fill.name, _IconSwap3Fill);
  }
});

export default IconSwap3Fill;