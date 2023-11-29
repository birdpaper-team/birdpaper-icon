import type { App } from 'vue';
import _IconEditFill from './icon-edit-fill.vue';

const IconEditFill = Object.assign(_IconEditFill, {
  install: (app: App) => {
    app.component(_IconEditFill.name, _IconEditFill);
  }
});

export default IconEditFill;