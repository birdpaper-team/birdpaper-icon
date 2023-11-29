import type { App } from 'vue';
import _IconZoomInLine from './icon-zoom-in-line.vue';

const IconZoomInLine = Object.assign(_IconZoomInLine, {
  install: (app: App) => {
    app.component(_IconZoomInLine.name, _IconZoomInLine);
  }
});

export default IconZoomInLine;