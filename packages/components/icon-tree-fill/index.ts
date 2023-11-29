import type { App } from 'vue';
import _IconTreeFill from './icon-tree-fill.vue';

const IconTreeFill = Object.assign(_IconTreeFill, {
  install: (app: App) => {
    app.component(_IconTreeFill.name, _IconTreeFill);
  }
});

export default IconTreeFill;