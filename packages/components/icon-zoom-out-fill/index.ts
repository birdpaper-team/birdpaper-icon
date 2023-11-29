import type { App } from 'vue';
import _IconZoomOutFill from './icon-zoom-out-fill.vue';

const IconZoomOutFill = Object.assign(_IconZoomOutFill, {
  install: (app: App) => {
    app.component(_IconZoomOutFill.name, _IconZoomOutFill);
  }
});

export default IconZoomOutFill;