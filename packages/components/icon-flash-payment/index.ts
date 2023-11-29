import type { App } from 'vue';
import _IconFlashPayment from './icon-flash-payment.vue';

const IconFlashPayment = Object.assign(_IconFlashPayment, {
  install: (app: App) => {
    app.component(_IconFlashPayment.name, _IconFlashPayment);
  }
});

export default IconFlashPayment;