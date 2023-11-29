import type { App } from 'vue';
import _IconPaymentMethod from './icon-payment-method.vue';

const IconPaymentMethod = Object.assign(_IconPaymentMethod, {
  install: (app: App) => {
    app.component(_IconPaymentMethod.name, _IconPaymentMethod);
  }
});

export default IconPaymentMethod;