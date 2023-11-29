import type { App } from 'vue';
import _IconDragMove2Fill from './icon-drag-move-2-fill.vue';

const IconDragMove2Fill = Object.assign(_IconDragMove2Fill, {
  install: (app: App) => {
    app.component(_IconDragMove2Fill.name, _IconDragMove2Fill);
  }
});

export default IconDragMove2Fill;