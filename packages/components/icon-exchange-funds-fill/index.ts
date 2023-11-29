import type { App } from 'vue';
import _IconExchangeFundsFill from './icon-exchange-funds-fill.vue';

const IconExchangeFundsFill = Object.assign(_IconExchangeFundsFill, {
  install: (app: App) => {
    app.component(_IconExchangeFundsFill.name, _IconExchangeFundsFill);
  }
});

export default IconExchangeFundsFill;