import type { App } from 'vue';
import _IconRoadMapLine from './icon-road-map-line.vue';

const IconRoadMapLine = Object.assign(_IconRoadMapLine, {
  install: (app: App) => {
    app.component(_IconRoadMapLine.name, _IconRoadMapLine);
  }
});

export default IconRoadMapLine;