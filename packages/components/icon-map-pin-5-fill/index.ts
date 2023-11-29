import type { App } from 'vue';
import _IconMapPin5Fill from './icon-map-pin-5-fill.vue';

const IconMapPin5Fill = Object.assign(_IconMapPin5Fill, {
  install: (app: App) => {
    app.component(_IconMapPin5Fill.name, _IconMapPin5Fill);
  }
});

export default IconMapPin5Fill;