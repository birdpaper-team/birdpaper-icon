import type { App } from 'vue';
import _IconSwap2Fill from './icon-swap-2-fill.vue';

const IconSwap2Fill = Object.assign(_IconSwap2Fill, {
  install: (app: App) => {
    app.component(_IconSwap2Fill.name, _IconSwap2Fill);
  }
});

export default IconSwap2Fill;