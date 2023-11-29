import type { App } from 'vue';
import _IconSwapFill from './icon-swap-fill.vue';

const IconSwapFill = Object.assign(_IconSwapFill, {
  install: (app: App) => {
    app.component(_IconSwapFill.name, _IconSwapFill);
  }
});

export default IconSwapFill;