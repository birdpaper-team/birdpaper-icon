import type { App } from 'vue';
import _IconSwap2Line from './icon-swap-2-line.vue';

const IconSwap2Line = Object.assign(_IconSwap2Line, {
  install: (app: App) => {
    app.component(_IconSwap2Line.name, _IconSwap2Line);
  }
});

export default IconSwap2Line;