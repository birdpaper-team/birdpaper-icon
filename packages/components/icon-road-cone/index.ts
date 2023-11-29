import type { App } from 'vue';
import _IconRoadCone from './icon-road-cone.vue';

const IconRoadCone = Object.assign(_IconRoadCone, {
  install: (app: App) => {
    app.component(_IconRoadCone.name, _IconRoadCone);
  }
});

export default IconRoadCone;