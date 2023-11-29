import type { App } from 'vue';
import _IconCursorFill from './icon-cursor-fill.vue';

const IconCursorFill = Object.assign(_IconCursorFill, {
  install: (app: App) => {
    app.component(_IconCursorFill.name, _IconCursorFill);
  }
});

export default IconCursorFill;