import type { App } from 'vue';
import _IconFileCopy2Fill from './icon-file-copy-2-fill.vue';

const IconFileCopy2Fill = Object.assign(_IconFileCopy2Fill, {
  install: (app: App) => {
    app.component(_IconFileCopy2Fill.name, _IconFileCopy2Fill);
  }
});

export default IconFileCopy2Fill;