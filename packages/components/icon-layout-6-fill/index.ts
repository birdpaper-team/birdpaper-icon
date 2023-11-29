import type { App } from 'vue';
import _IconLayout6Fill from './icon-layout-6-fill.vue';

const IconLayout6Fill = Object.assign(_IconLayout6Fill, {
  install: (app: App) => {
    app.component(_IconLayout6Fill.name, _IconLayout6Fill);
  }
});

export default IconLayout6Fill;