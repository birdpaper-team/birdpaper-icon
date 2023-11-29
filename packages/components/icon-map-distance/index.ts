import type { App } from 'vue';
import _IconMapDistance from './icon-map-distance.vue';

const IconMapDistance = Object.assign(_IconMapDistance, {
  install: (app: App) => {
    app.component(_IconMapDistance.name, _IconMapDistance);
  }
});

export default IconMapDistance;