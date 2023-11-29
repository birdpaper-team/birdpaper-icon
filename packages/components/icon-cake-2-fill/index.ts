import type { App } from 'vue';
import _IconCake2Fill from './icon-cake-2-fill.vue';

const IconCake2Fill = Object.assign(_IconCake2Fill, {
  install: (app: App) => {
    app.component(_IconCake2Fill.name, _IconCake2Fill);
  }
});

export default IconCake2Fill;