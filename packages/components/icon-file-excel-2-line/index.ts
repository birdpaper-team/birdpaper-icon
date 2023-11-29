import type { App } from 'vue';
import _IconFileExcel2Line from './icon-file-excel-2-line.vue';

const IconFileExcel2Line = Object.assign(_IconFileExcel2Line, {
  install: (app: App) => {
    app.component(_IconFileExcel2Line.name, _IconFileExcel2Line);
  }
});

export default IconFileExcel2Line;