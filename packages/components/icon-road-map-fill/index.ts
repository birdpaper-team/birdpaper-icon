import type { App } from 'vue';
import _IconRoadMapFill from './icon-road-map-fill.vue';

const IconRoadMapFill = Object.assign(_IconRoadMapFill, {
  install: (app: App) => {
    app.component(_IconRoadMapFill.name, _IconRoadMapFill);
  }
});

export default IconRoadMapFill;