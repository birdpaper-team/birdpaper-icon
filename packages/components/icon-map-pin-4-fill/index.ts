import type { App } from 'vue';
import _IconMapPin4Fill from './icon-map-pin-4-fill.vue';

const IconMapPin4Fill = Object.assign(_IconMapPin4Fill, {
  install: (app: App) => {
    app.component(_IconMapPin4Fill.name, _IconMapPin4Fill);
  }
});

export default IconMapPin4Fill;