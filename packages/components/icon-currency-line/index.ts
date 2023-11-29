import type { App } from 'vue';
import _IconCurrencyLine from './icon-currency-line.vue';

const IconCurrencyLine = Object.assign(_IconCurrencyLine, {
  install: (app: App) => {
    app.component(_IconCurrencyLine.name, _IconCurrencyLine);
  }
});

export default IconCurrencyLine;