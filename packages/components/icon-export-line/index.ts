import type { App } from 'vue';
import _IconExportLine from './icon-export-line.vue';

const IconExportLine = Object.assign(_IconExportLine, {
  install: (app: App) => {
    app.component(_IconExportLine.name, _IconExportLine);
  }
});

export default IconExportLine;