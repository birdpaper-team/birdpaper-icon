import type { App } from 'vue';
import _IconFileTextLine from './icon-file-text-line.vue';

const IconFileTextLine = Object.assign(_IconFileTextLine, {
  install: (app: App) => {
    app.component(_IconFileTextLine.name, _IconFileTextLine);
  }
});

export default IconFileTextLine;