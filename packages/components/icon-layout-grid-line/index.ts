import type { App } from 'vue';
import _IconLayoutGridLine from './icon-layout-grid-line.vue';

const IconLayoutGridLine = Object.assign(_IconLayoutGridLine, {
  install: (app: App) => {
    app.component(_IconLayoutGridLine.name, _IconLayoutGridLine);
  }
});

export default IconLayoutGridLine;