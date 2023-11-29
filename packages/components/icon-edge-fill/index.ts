import type { App } from 'vue';
import _IconEdgeFill from './icon-edge-fill.vue';

const IconEdgeFill = Object.assign(_IconEdgeFill, {
  install: (app: App) => {
    app.component(_IconEdgeFill.name, _IconEdgeFill);
  }
});

export default IconEdgeFill;