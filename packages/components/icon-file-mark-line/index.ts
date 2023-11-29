import type { App } from 'vue';
import _IconFileMarkLine from './icon-file-mark-line.vue';

const IconFileMarkLine = Object.assign(_IconFileMarkLine, {
  install: (app: App) => {
    app.component(_IconFileMarkLine.name, _IconFileMarkLine);
  }
});

export default IconFileMarkLine;