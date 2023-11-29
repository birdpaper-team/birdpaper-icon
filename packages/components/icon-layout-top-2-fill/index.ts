import type { App } from 'vue';
import _IconLayoutTop2Fill from './icon-layout-top-2-fill.vue';

const IconLayoutTop2Fill = Object.assign(_IconLayoutTop2Fill, {
  install: (app: App) => {
    app.component(_IconLayoutTop2Fill.name, _IconLayoutTop2Fill);
  }
});

export default IconLayoutTop2Fill;