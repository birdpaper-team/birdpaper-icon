import type { App } from 'vue';
import _IconDeleteBin2Fill from './icon-delete-bin-2-fill.vue';

const IconDeleteBin2Fill = Object.assign(_IconDeleteBin2Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin2Fill.name, _IconDeleteBin2Fill);
  }
});

export default IconDeleteBin2Fill;