import type { App } from 'vue';
import _IconFilter3Fill from './icon-filter-3-fill.vue';

const IconFilter3Fill = Object.assign(_IconFilter3Fill, {
  install: (app: App) => {
    app.component(_IconFilter3Fill.name, _IconFilter3Fill);
  }
});

export default IconFilter3Fill;