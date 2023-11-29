import type { App } from 'vue';
import _IconShape2Fill from './icon-shape-2-fill.vue';

const IconShape2Fill = Object.assign(_IconShape2Fill, {
  install: (app: App) => {
    app.component(_IconShape2Fill.name, _IconShape2Fill);
  }
});

export default IconShape2Fill;