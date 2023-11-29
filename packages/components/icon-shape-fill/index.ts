import type { App } from 'vue';
import _IconShapeFill from './icon-shape-fill.vue';

const IconShapeFill = Object.assign(_IconShapeFill, {
  install: (app: App) => {
    app.component(_IconShapeFill.name, _IconShapeFill);
  }
});

export default IconShapeFill;