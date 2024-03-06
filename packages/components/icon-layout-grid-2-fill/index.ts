import type { App } from 'vue';
import _IconLayoutGrid2Fill from './icon-layout-grid-2-fill.vue';

const IconLayoutGrid2Fill = Object.assign(_IconLayoutGrid2Fill, {
  install: (app: App) => {
    app.component(_IconLayoutGrid2Fill.name, _IconLayoutGrid2Fill);
  }
});

export default IconLayoutGrid2Fill;