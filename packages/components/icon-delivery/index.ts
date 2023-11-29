import type { App } from 'vue';
import _IconDelivery from './icon-delivery.vue';

const IconDelivery = Object.assign(_IconDelivery, {
  install: (app: App) => {
    app.component(_IconDelivery.name, _IconDelivery);
  }
});

export default IconDelivery;