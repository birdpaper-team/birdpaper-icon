import type { App } from 'vue';
import _IconFileExcel from './icon-file-excel.vue';

const IconFileExcel = Object.assign(_IconFileExcel, {
  install: (app: App) => {
    app.component(_IconFileExcel.name, _IconFileExcel);
  }
});

export default IconFileExcel;