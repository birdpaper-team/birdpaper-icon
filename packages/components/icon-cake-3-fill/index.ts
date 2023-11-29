import type { App } from 'vue';
import _IconCake3Fill from './icon-cake-3-fill.vue';

const IconCake3Fill = Object.assign(_IconCake3Fill, {
  install: (app: App) => {
    app.component(_IconCake3Fill.name, _IconCake3Fill);
  }
});

export default IconCake3Fill;