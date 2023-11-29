import type { App } from 'vue';
import _IconCompassLine from './icon-compass-line.vue';

const IconCompassLine = Object.assign(_IconCompassLine, {
  install: (app: App) => {
    app.component(_IconCompassLine.name, _IconCompassLine);
  }
});

export default IconCompassLine;