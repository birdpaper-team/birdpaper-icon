import type { App } from 'vue';
import _IconMenuLine from './icon-menu-line.vue';

const IconMenuLine = Object.assign(_IconMenuLine, {
  install: (app: App) => {
    app.component(_IconMenuLine.name, _IconMenuLine);
  }
});

export default IconMenuLine;