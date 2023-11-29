import type { App } from 'vue';
import _IconRoadsterLine from './icon-roadster-line.vue';

const IconRoadsterLine = Object.assign(_IconRoadsterLine, {
  install: (app: App) => {
    app.component(_IconRoadsterLine.name, _IconRoadsterLine);
  }
});

export default IconRoadsterLine;