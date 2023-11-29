import type { App } from 'vue';
import _IconFile2Fill from './icon-file-2-fill.vue';

const IconFile2Fill = Object.assign(_IconFile2Fill, {
  install: (app: App) => {
    app.component(_IconFile2Fill.name, _IconFile2Fill);
  }
});

export default IconFile2Fill;