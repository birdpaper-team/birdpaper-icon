import type { App } from 'vue';
import _IconPaintBrushFill from './icon-paint-brush-fill.vue';

const IconPaintBrushFill = Object.assign(_IconPaintBrushFill, {
  install: (app: App) => {
    app.component(_IconPaintBrushFill.name, _IconPaintBrushFill);
  }
});

export default IconPaintBrushFill;