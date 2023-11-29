import type { App } from 'vue';
import _IconFile3Fill from './icon-file-3-fill.vue';

const IconFile3Fill = Object.assign(_IconFile3Fill, {
  install: (app: App) => {
    app.component(_IconFile3Fill.name, _IconFile3Fill);
  }
});

export default IconFile3Fill;