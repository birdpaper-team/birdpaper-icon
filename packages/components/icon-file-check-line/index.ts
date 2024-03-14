import type { App } from 'vue';
import _IconFileCheckLine from './icon-file-check-line.vue';

const IconFileCheckLine = Object.assign(_IconFileCheckLine, {
  install: (app: App) => {
    app.component(_IconFileCheckLine.name, _IconFileCheckLine);
  }
});

export default IconFileCheckLine;