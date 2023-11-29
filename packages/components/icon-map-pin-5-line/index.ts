import type { App } from 'vue';
import _IconMapPin5Line from './icon-map-pin-5-line.vue';

const IconMapPin5Line = Object.assign(_IconMapPin5Line, {
  install: (app: App) => {
    app.component(_IconMapPin5Line.name, _IconMapPin5Line);
  }
});

export default IconMapPin5Line;