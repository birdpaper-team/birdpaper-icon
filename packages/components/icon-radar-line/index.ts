import type { App } from 'vue';
import _IconRadarLine from './icon-radar-line.vue';

const IconRadarLine = Object.assign(_IconRadarLine, {
  install: (app: App) => {
    app.component(_IconRadarLine.name, _IconRadarLine);
  }
});

export default IconRadarLine;