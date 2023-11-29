import type { App } from 'vue';
import _IconMenuFill from './icon-menu-fill.vue';

const IconMenuFill = Object.assign(_IconMenuFill, {
  install: (app: App) => {
    app.component(_IconMenuFill.name, _IconMenuFill);
  }
});

export default IconMenuFill;