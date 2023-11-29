import type { App } from 'vue';
import _IconMenuAddLine from './icon-menu-add-line.vue';

const IconMenuAddLine = Object.assign(_IconMenuAddLine, {
  install: (app: App) => {
    app.component(_IconMenuAddLine.name, _IconMenuAddLine);
  }
});

export default IconMenuAddLine;