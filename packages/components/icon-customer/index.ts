import type { App } from 'vue';
import _IconCustomer from './icon-customer.vue';

const IconCustomer = Object.assign(_IconCustomer, {
  install: (app: App) => {
    app.component(_IconCustomer.name, _IconCustomer);
  }
});

export default IconCustomer;