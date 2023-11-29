import type { App } from 'vue';
import _IconImportAndExport from './icon-import-and-export.vue';

const IconImportAndExport = Object.assign(_IconImportAndExport, {
  install: (app: App) => {
    app.component(_IconImportAndExport.name, _IconImportAndExport);
  }
});

export default IconImportAndExport;