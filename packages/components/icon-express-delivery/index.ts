import type { App } from 'vue';
import _IconExpressDelivery from './icon-express-delivery.vue';

const IconExpressDelivery = Object.assign(_IconExpressDelivery, {
  install: (app: App) => {
    app.component(_IconExpressDelivery.name, _IconExpressDelivery);
  }
});

export default IconExpressDelivery;