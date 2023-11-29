import type { App } from 'vue';
import _IconCursorLine from './icon-cursor-line.vue';

const IconCursorLine = Object.assign(_IconCursorLine, {
  install: (app: App) => {
    app.component(_IconCursorLine.name, _IconCursorLine);
  }
});

export default IconCursorLine;