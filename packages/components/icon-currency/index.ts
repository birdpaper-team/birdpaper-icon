import type { App } from 'vue';
import _IconCurrency from './icon-currency.vue';

const IconCurrency = Object.assign(_IconCurrency, {
  install: (app: App) => {
    app.component(_IconCurrency.name, _IconCurrency);
  }
});

export default IconCurrency;