import type { App } from 'vue';
import _IconDragDropFill from './icon-drag-drop-fill.vue';

const IconDragDropFill = Object.assign(_IconDragDropFill, {
  install: (app: App) => {
    app.component(_IconDragDropFill.name, _IconDragDropFill);
  }
});

export default IconDragDropFill;