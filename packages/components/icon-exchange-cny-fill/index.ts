import type { App } from 'vue';
import _IconExchangeCnyFill from './icon-exchange-cny-fill.vue';

const IconExchangeCnyFill = Object.assign(_IconExchangeCnyFill, {
  install: (app: App) => {
    app.component(_IconExchangeCnyFill.name, _IconExchangeCnyFill);
  }
});

export default IconExchangeCnyFill;