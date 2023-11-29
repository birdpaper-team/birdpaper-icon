import type { App } from 'vue';
import _IconSwapBoxFill from './icon-swap-box-fill.vue';

const IconSwapBoxFill = Object.assign(_IconSwapBoxFill, {
  install: (app: App) => {
    app.component(_IconSwapBoxFill.name, _IconSwapBoxFill);
  }
});

export default IconSwapBoxFill;