import type { App } from 'vue';
import _IconFilePpt2Fill from './icon-file-ppt-2-fill.vue';

const IconFilePpt2Fill = Object.assign(_IconFilePpt2Fill, {
  install: (app: App) => {
    app.component(_IconFilePpt2Fill.name, _IconFilePpt2Fill);
  }
});

export default IconFilePpt2Fill;