import type { App } from 'vue';
import _IconFileForbidFill from './icon-file-forbid-fill.vue';

const IconFileForbidFill = Object.assign(_IconFileForbidFill, {
  install: (app: App) => {
    app.component(_IconFileForbidFill.name, _IconFileForbidFill);
  }
});

export default IconFileForbidFill;