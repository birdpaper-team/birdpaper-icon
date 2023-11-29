import type { App } from 'vue';
import _IconMapPin3Fill from './icon-map-pin-3-fill.vue';

const IconMapPin3Fill = Object.assign(_IconMapPin3Fill, {
  install: (app: App) => {
    app.component(_IconMapPin3Fill.name, _IconMapPin3Fill);
  }
});

export default IconMapPin3Fill;