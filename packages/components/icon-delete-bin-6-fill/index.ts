import type { App } from 'vue';
import _IconDeleteBin6Fill from './icon-delete-bin-6-fill.vue';

const IconDeleteBin6Fill = Object.assign(_IconDeleteBin6Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin6Fill.name, _IconDeleteBin6Fill);
  }
});

export default IconDeleteBin6Fill;