import type { App } from 'vue';
import _IconPaintFill from './icon-paint-fill.vue';

const IconPaintFill = Object.assign(_IconPaintFill, {
  install: (app: App) => {
    app.component(_IconPaintFill.name, _IconPaintFill);
  }
});

export default IconPaintFill;