import type { App } from 'vue';
import _IconZoomOut from './icon-zoom-out.vue';

const IconZoomOut = Object.assign(_IconZoomOut, {
  install: (app: App) => {
    app.component(_IconZoomOut.name, _IconZoomOut);
  }
});

export default IconZoomOut;