import type { App } from 'vue';
import _IconSecurePaymentFill from './icon-secure-payment-fill.vue';

const IconSecurePaymentFill = Object.assign(_IconSecurePaymentFill, {
  install: (app: App) => {
    app.component(_IconSecurePaymentFill.name, _IconSecurePaymentFill);
  }
});

export default IconSecurePaymentFill;