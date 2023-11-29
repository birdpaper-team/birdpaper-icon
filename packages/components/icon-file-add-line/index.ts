import type { App } from 'vue';
import _IconFileAddLine from './icon-file-add-line.vue';

const IconFileAddLine = Object.assign(_IconFileAddLine, {
  install: (app: App) => {
    app.component(_IconFileAddLine.name, _IconFileAddLine);
  }
});

export default IconFileAddLine;