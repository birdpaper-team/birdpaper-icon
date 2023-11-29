import type { App } from 'vue';
import _IconZoomInFill from './icon-zoom-in-fill.vue';

const IconZoomInFill = Object.assign(_IconZoomInFill, {
  install: (app: App) => {
    app.component(_IconZoomInFill.name, _IconZoomInFill);
  }
});

export default IconZoomInFill;