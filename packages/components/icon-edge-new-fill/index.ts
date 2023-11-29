import type { App } from 'vue';
import _IconEdgeNewFill from './icon-edge-new-fill.vue';

const IconEdgeNewFill = Object.assign(_IconEdgeNewFill, {
  install: (app: App) => {
    app.component(_IconEdgeNewFill.name, _IconEdgeNewFill);
  }
});

export default IconEdgeNewFill;