import type { App } from 'vue';
import _IconMapRoad from './icon-map-road.vue';

const IconMapRoad = Object.assign(_IconMapRoad, {
  install: (app: App) => {
    app.component(_IconMapRoad.name, _IconMapRoad);
  }
});

export default IconMapRoad;