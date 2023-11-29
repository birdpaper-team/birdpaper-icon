import type { App } from 'vue';
import _IconDragDropLine from './icon-drag-drop-line.vue';

const IconDragDropLine = Object.assign(_IconDragDropLine, {
  install: (app: App) => {
    app.component(_IconDragDropLine.name, _IconDragDropLine);
  }
});

export default IconDragDropLine;