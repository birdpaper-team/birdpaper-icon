import type { App } from 'vue';
import _IconFileFill from './icon-file-fill.vue';

const IconFileFill = Object.assign(_IconFileFill, {
  install: (app: App) => {
    app.component(_IconFileFill.name, _IconFileFill);
  }
});

export default IconFileFill;