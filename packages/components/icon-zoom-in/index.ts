import type { App } from 'vue';
import _IconZoomIn from './icon-zoom-in.vue';

const IconZoomIn = Object.assign(_IconZoomIn, {
  install: (app: App) => {
    app.component(_IconZoomIn.name, _IconZoomIn);
  }
});

export default IconZoomIn;