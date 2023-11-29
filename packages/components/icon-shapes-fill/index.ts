import type { App } from 'vue';
import _IconShapesFill from './icon-shapes-fill.vue';

const IconShapesFill = Object.assign(_IconShapesFill, {
  install: (app: App) => {
    app.component(_IconShapesFill.name, _IconShapesFill);
  }
});

export default IconShapesFill;