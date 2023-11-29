import type { App } from 'vue';
import _IconDeleteBin4Fill from './icon-delete-bin-4-fill.vue';

const IconDeleteBin4Fill = Object.assign(_IconDeleteBin4Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin4Fill.name, _IconDeleteBin4Fill);
  }
});

export default IconDeleteBin4Fill;