import type { App } from 'vue';
import _IconFilePdfLine from './icon-file-pdf-line.vue';

const IconFilePdfLine = Object.assign(_IconFilePdfLine, {
  install: (app: App) => {
    app.component(_IconFilePdfLine.name, _IconFilePdfLine);
  }
});

export default IconFilePdfLine;