import type { App } from 'vue';
import _IconTokenSwapFill from './icon-token-swap-fill.vue';

const IconTokenSwapFill = Object.assign(_IconTokenSwapFill, {
  install: (app: App) => {
    app.component(_IconTokenSwapFill.name, _IconTokenSwapFill);
  }
});

export default IconTokenSwapFill;