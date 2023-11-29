import type { App } from 'vue';
import _IconDragMoveLine from './icon-drag-move-line.vue';

const IconDragMoveLine = Object.assign(_IconDragMoveLine, {
  install: (app: App) => {
    app.component(_IconDragMoveLine.name, _IconDragMoveLine);
  }
});

export default IconDragMoveLine;