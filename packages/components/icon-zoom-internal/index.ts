import type { App } from 'vue';
import _IconZoomInternal from './icon-zoom-internal.vue';

const IconZoomInternal = Object.assign(_IconZoomInternal, {
  install: (app: App) => {
    app.component(_IconZoomInternal.name, _IconZoomInternal);
  }
});

export default IconZoomInternal;