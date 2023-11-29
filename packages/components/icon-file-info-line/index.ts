import type { App } from 'vue';
import _IconFileInfoLine from './icon-file-info-line.vue';

const IconFileInfoLine = Object.assign(_IconFileInfoLine, {
  install: (app: App) => {
    app.component(_IconFileInfoLine.name, _IconFileInfoLine);
  }
});

export default IconFileInfoLine;