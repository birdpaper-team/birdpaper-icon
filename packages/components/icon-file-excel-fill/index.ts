import type { App } from 'vue';
import _IconFileExcelFill from './icon-file-excel-fill.vue';

const IconFileExcelFill = Object.assign(_IconFileExcelFill, {
  install: (app: App) => {
    app.component(_IconFileExcelFill.name, _IconFileExcelFill);
  }
});

export default IconFileExcelFill;