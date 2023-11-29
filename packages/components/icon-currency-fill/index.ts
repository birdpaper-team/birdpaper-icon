import type { App } from 'vue';
import _IconCurrencyFill from './icon-currency-fill.vue';

const IconCurrencyFill = Object.assign(_IconCurrencyFill, {
  install: (app: App) => {
    app.component(_IconCurrencyFill.name, _IconCurrencyFill);
  }
});

export default IconCurrencyFill;