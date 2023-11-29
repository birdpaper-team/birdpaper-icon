import type { App } from 'vue';
import _IconTriangleFill from './icon-triangle-fill.vue';

const IconTriangleFill = Object.assign(_IconTriangleFill, {
  install: (app: App) => {
    app.component(_IconTriangleFill.name, _IconTriangleFill);
  }
});

export default IconTriangleFill;