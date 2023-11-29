import type { App } from 'vue';
import _IconFileCopyLine from './icon-file-copy-line.vue';

const IconFileCopyLine = Object.assign(_IconFileCopyLine, {
  install: (app: App) => {
    app.component(_IconFileCopyLine.name, _IconFileCopyLine);
  }
});

export default IconFileCopyLine;