import type { App } from 'vue';
import _IconExportFill from './icon-export-fill.vue';

const IconExportFill = Object.assign(_IconExportFill, {
  install: (app: App) => {
    app.component(_IconExportFill.name, _IconExportFill);
  }
});

export default IconExportFill;