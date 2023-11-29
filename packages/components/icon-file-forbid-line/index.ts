import type { App } from 'vue';
import _IconFileForbidLine from './icon-file-forbid-line.vue';

const IconFileForbidLine = Object.assign(_IconFileForbidLine, {
  install: (app: App) => {
    app.component(_IconFileForbidLine.name, _IconFileForbidLine);
  }
});

export default IconFileForbidLine;