import type { App } from 'vue';
import _IconDeleteBin3Fill from './icon-delete-bin-3-fill.vue';

const IconDeleteBin3Fill = Object.assign(_IconDeleteBin3Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin3Fill.name, _IconDeleteBin3Fill);
  }
});

export default IconDeleteBin3Fill;