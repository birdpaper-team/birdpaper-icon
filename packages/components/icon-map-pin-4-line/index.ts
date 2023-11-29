import type { App } from 'vue';
import _IconMapPin4Line from './icon-map-pin-4-line.vue';

const IconMapPin4Line = Object.assign(_IconMapPin4Line, {
  install: (app: App) => {
    app.component(_IconMapPin4Line.name, _IconMapPin4Line);
  }
});

export default IconMapPin4Line;