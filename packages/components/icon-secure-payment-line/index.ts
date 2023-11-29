import type { App } from 'vue';
import _IconSecurePaymentLine from './icon-secure-payment-line.vue';

const IconSecurePaymentLine = Object.assign(_IconSecurePaymentLine, {
  install: (app: App) => {
    app.component(_IconSecurePaymentLine.name, _IconSecurePaymentLine);
  }
});

export default IconSecurePaymentLine;