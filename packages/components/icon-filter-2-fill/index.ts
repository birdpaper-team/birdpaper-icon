import type { App } from 'vue';
import _IconFilter2Fill from './icon-filter-2-fill.vue';

const IconFilter2Fill = Object.assign(_IconFilter2Fill, {
  install: (app: App) => {
    app.component(_IconFilter2Fill.name, _IconFilter2Fill);
  }
});

export default IconFilter2Fill;