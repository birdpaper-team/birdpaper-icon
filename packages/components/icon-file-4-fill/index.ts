import type { App } from 'vue';
import _IconFile4Fill from './icon-file-4-fill.vue';

const IconFile4Fill = Object.assign(_IconFile4Fill, {
  install: (app: App) => {
    app.component(_IconFile4Fill.name, _IconFile4Fill);
  }
});

export default IconFile4Fill;