import type { App } from 'vue';
import _IconDeleteBin7Fill from './icon-delete-bin-7-fill.vue';

const IconDeleteBin7Fill = Object.assign(_IconDeleteBin7Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin7Fill.name, _IconDeleteBin7Fill);
  }
});

export default IconDeleteBin7Fill;