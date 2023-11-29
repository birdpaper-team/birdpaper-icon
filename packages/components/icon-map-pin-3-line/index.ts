import type { App } from 'vue';
import _IconMapPin3Line from './icon-map-pin-3-line.vue';

const IconMapPin3Line = Object.assign(_IconMapPin3Line, {
  install: (app: App) => {
    app.component(_IconMapPin3Line.name, _IconMapPin3Line);
  }
});

export default IconMapPin3Line;