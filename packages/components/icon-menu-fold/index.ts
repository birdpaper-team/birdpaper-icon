import type { App } from 'vue';
import _IconMenuFold from './icon-menu-fold.vue';

const IconMenuFold = Object.assign(_IconMenuFold, {
  install: (app: App) => {
    app.component(_IconMenuFold.name, _IconMenuFold);
  }
});

export default IconMenuFold;