import type { App } from 'vue';
import _IconRoad from './icon-road.vue';

const IconRoad = Object.assign(_IconRoad, {
  install: (app: App) => {
    app.component(_IconRoad.name, _IconRoad);
  }
});

export default IconRoad;