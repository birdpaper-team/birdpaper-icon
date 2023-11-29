import type { App } from 'vue';
import _IconTokenSwapLine from './icon-token-swap-line.vue';

const IconTokenSwapLine = Object.assign(_IconTokenSwapLine, {
  install: (app: App) => {
    app.component(_IconTokenSwapLine.name, _IconTokenSwapLine);
  }
});

export default IconTokenSwapLine;