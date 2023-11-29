import type { App } from 'vue';
import _IconDeleteBin5Fill from './icon-delete-bin-5-fill.vue';

const IconDeleteBin5Fill = Object.assign(_IconDeleteBin5Fill, {
  install: (app: App) => {
    app.component(_IconDeleteBin5Fill.name, _IconDeleteBin5Fill);
  }
});

export default IconDeleteBin5Fill;