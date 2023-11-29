import type { App } from 'vue';
import _IconFileListLine from './icon-file-list-line.vue';

const IconFileListLine = Object.assign(_IconFileListLine, {
  install: (app: App) => {
    app.component(_IconFileListLine.name, _IconFileListLine);
  }
});

export default IconFileListLine;