import type { App } from 'vue';
import _IconDragMoveFill from './icon-drag-move-fill.vue';

const IconDragMoveFill = Object.assign(_IconDragMoveFill, {
  install: (app: App) => {
    app.component(_IconDragMoveFill.name, _IconDragMoveFill);
  }
});

export default IconDragMoveFill;