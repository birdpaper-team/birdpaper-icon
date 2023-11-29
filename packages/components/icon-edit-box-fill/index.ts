import type { App } from 'vue';
import _IconEditBoxFill from './icon-edit-box-fill.vue';

const IconEditBoxFill = Object.assign(_IconEditBoxFill, {
  install: (app: App) => {
    app.component(_IconEditBoxFill.name, _IconEditBoxFill);
  }
});

export default IconEditBoxFill;