import type { App } from 'vue';
import _IconMapPin2Fill from './icon-map-pin-2-fill.vue';

const IconMapPin2Fill = Object.assign(_IconMapPin2Fill, {
  install: (app: App) => {
    app.component(_IconMapPin2Fill.name, _IconMapPin2Fill);
  }
});

export default IconMapPin2Fill;