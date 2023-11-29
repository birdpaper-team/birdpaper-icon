import type { App } from 'vue';
import _IconMenuFoldLine from './icon-menu-fold-line.vue';

const IconMenuFoldLine = Object.assign(_IconMenuFoldLine, {
  install: (app: App) => {
    app.component(_IconMenuFoldLine.name, _IconMenuFoldLine);
  }
});

export default IconMenuFoldLine;