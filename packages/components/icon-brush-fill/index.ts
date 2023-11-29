import type { App } from 'vue';
import _IconBrushFill from './icon-brush-fill.vue';

const IconBrushFill = Object.assign(_IconBrushFill, {
  install: (app: App) => {
    app.component(_IconBrushFill.name, _IconBrushFill);
  }
});

export default IconBrushFill;