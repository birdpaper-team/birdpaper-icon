import type { App } from 'vue';
import _IconImportFill from './icon-import-fill.vue';

const IconImportFill = Object.assign(_IconImportFill, {
  install: (app: App) => {
    app.component(_IconImportFill.name, _IconImportFill);
  }
});

export default IconImportFill;