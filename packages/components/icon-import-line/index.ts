import type { App } from 'vue';
import _IconImportLine from './icon-import-line.vue';

const IconImportLine = Object.assign(_IconImportLine, {
  install: (app: App) => {
    app.component(_IconImportLine.name, _IconImportLine);
  }
});

export default IconImportLine;