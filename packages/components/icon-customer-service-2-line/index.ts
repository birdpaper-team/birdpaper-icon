import type { App } from 'vue';
import _IconCustomerService2Line from './icon-customer-service-2-line.vue';

const IconCustomerService2Line = Object.assign(_IconCustomerService2Line, {
  install: (app: App) => {
    app.component(_IconCustomerService2Line.name, _IconCustomerService2Line);
  }
});

export default IconCustomerService2Line;