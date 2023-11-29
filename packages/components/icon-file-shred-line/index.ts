import type { App } from 'vue';
import _IconFileShredLine from './icon-file-shred-line.vue';

const IconFileShredLine = Object.assign(_IconFileShredLine, {
  install: (app: App) => {
    app.component(_IconFileShredLine.name, _IconFileShredLine);
  }
});

export default IconFileShredLine;