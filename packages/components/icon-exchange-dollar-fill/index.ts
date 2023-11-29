import type { App } from 'vue';
import _IconExchangeDollarFill from './icon-exchange-dollar-fill.vue';

const IconExchangeDollarFill = Object.assign(_IconExchangeDollarFill, {
  install: (app: App) => {
    app.component(_IconExchangeDollarFill.name, _IconExchangeDollarFill);
  }
});

export default IconExchangeDollarFill;