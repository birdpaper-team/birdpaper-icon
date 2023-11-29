import type { App } from 'vue';
import _IconHomestay from './icon-homestay.vue';

const IconHomestay = Object.assign(_IconHomestay, {
  install: (app: App) => {
    app.component(_IconHomestay.name, _IconHomestay);
  }
});

export default IconHomestay;