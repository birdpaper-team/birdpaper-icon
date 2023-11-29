import type { App } from 'vue';
import _IconRectangleFill from './icon-rectangle-fill.vue';

const IconRectangleFill = Object.assign(_IconRectangleFill, {
  install: (app: App) => {
    app.component(_IconRectangleFill.name, _IconRectangleFill);
  }
});

export default IconRectangleFill;