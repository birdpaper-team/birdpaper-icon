import type { App } from 'vue';
import _IconSwapBoxLine from './icon-swap-box-line.vue';

const IconSwapBoxLine = Object.assign(_IconSwapBoxLine, {
  install: (app: App) => {
    app.component(_IconSwapBoxLine.name, _IconSwapBoxLine);
  }
});

export default IconSwapBoxLine;