import type { App } from 'vue';
import _IconAdvertisementFill from './icon-advertisement-fill.vue';

const IconAdvertisementFill = Object.assign(_IconAdvertisementFill, {
  install: (app: App) => {
    app.component(_IconAdvertisementFill.name, _IconAdvertisementFill);
  }
});

export default IconAdvertisementFill;