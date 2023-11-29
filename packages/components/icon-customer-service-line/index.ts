import type { App } from 'vue';
import _IconCustomerServiceLine from './icon-customer-service-line.vue';

const IconCustomerServiceLine = Object.assign(_IconCustomerServiceLine, {
  install: (app: App) => {
    app.component(_IconCustomerServiceLine.name, _IconCustomerServiceLine);
  }
});

export default IconCustomerServiceLine;