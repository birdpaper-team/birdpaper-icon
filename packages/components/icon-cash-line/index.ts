import type { App } from 'vue';
import _IconCashLine from './icon-cash-line.vue';

const IconCashLine = Object.assign(_IconCashLine, {
  install: (app: App) => {
    app.component(_IconCashLine.name, _IconCashLine);
  }
});

export default IconCashLine;