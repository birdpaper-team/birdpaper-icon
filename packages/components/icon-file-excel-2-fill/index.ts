import type { App } from 'vue';
import _IconFileExcel2Fill from './icon-file-excel-2-fill.vue';

const IconFileExcel2Fill = Object.assign(_IconFileExcel2Fill, {
  install: (app: App) => {
    app.component(_IconFileExcel2Fill.name, _IconFileExcel2Fill);
  }
});

export default IconFileExcel2Fill;