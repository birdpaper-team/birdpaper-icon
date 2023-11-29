import type { App } from 'vue';
import _IconMenuFoldFill from './icon-menu-fold-fill.vue';

const IconMenuFoldFill = Object.assign(_IconMenuFoldFill, {
  install: (app: App) => {
    app.component(_IconMenuFoldFill.name, _IconMenuFoldFill);
  }
});

export default IconMenuFoldFill;