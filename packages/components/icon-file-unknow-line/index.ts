import type { App } from 'vue';
import _IconFileUnknowLine from './icon-file-unknow-line.vue';

const IconFileUnknowLine = Object.assign(_IconFileUnknowLine, {
  install: (app: App) => {
    app.component(_IconFileUnknowLine.name, _IconFileUnknowLine);
  }
});

export default IconFileUnknowLine;