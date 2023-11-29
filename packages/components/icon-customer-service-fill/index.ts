import type { App } from 'vue';
import _IconCustomerServiceFill from './icon-customer-service-fill.vue';

const IconCustomerServiceFill = Object.assign(_IconCustomerServiceFill, {
  install: (app: App) => {
    app.component(_IconCustomerServiceFill.name, _IconCustomerServiceFill);
  }
});

export default IconCustomerServiceFill;