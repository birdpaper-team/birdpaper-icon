import type { App } from 'vue';
import _IconArchiveStackLine from './icon-archive-stack-line.vue';

const IconArchiveStackLine = Object.assign(_IconArchiveStackLine, {
  install: (app: App) => {
    app.component(_IconArchiveStackLine.name, _IconArchiveStackLine);
  }
});

export default IconArchiveStackLine;