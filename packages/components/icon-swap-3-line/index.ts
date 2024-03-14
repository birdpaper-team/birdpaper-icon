import type { App } from 'vue';
import _IconSwap3Line from './icon-swap-3-line.vue';

const IconSwap3Line = Object.assign(_IconSwap3Line, {
  install: (app: App) => {
    app.component(_IconSwap3Line.name, _IconSwap3Line);
  }
});

export default IconSwap3Line;