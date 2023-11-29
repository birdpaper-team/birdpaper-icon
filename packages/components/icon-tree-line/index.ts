import type { App } from 'vue';
import _IconTreeLine from './icon-tree-line.vue';

const IconTreeLine = Object.assign(_IconTreeLine, {
  install: (app: App) => {
    app.component(_IconTreeLine.name, _IconTreeLine);
  }
});

export default IconTreeLine;