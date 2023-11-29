import type { App } from 'vue';
import _IconFilePptLine from './icon-file-ppt-line.vue';

const IconFilePptLine = Object.assign(_IconFilePptLine, {
  install: (app: App) => {
    app.component(_IconFilePptLine.name, _IconFilePptLine);
  }
});

export default IconFilePptLine;