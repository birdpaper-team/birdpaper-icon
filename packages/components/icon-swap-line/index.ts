import type { App } from 'vue';
import _IconSwapLine from './icon-swap-line.vue';

const IconSwapLine = Object.assign(_IconSwapLine, {
  install: (app: App) => {
    app.component(_IconSwapLine.name, _IconSwapLine);
  }
});

export default IconSwapLine;