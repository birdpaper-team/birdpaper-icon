import type { App } from 'vue';
import _IconFileExcelLine from './icon-file-excel-line.vue';

const IconFileExcelLine = Object.assign(_IconFileExcelLine, {
  install: (app: App) => {
    app.component(_IconFileExcelLine.name, _IconFileExcelLine);
  }
});

export default IconFileExcelLine;