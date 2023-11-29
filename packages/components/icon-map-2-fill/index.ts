import type { App } from 'vue';
import _IconMap2Fill from './icon-map-2-fill.vue';

const IconMap2Fill = Object.assign(_IconMap2Fill, {
  install: (app: App) => {
    app.component(_IconMap2Fill.name, _IconMap2Fill);
  }
});

export default IconMap2Fill;