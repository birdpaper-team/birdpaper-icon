import type { App } from 'vue';
import _IconZoomOutLine from './icon-zoom-out-line.vue';

const IconZoomOutLine = Object.assign(_IconZoomOutLine, {
  install: (app: App) => {
    app.component(_IconZoomOutLine.name, _IconZoomOutLine);
  }
});

export default IconZoomOutLine;