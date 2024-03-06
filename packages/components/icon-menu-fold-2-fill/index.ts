import type { App } from 'vue';
import _IconMenuFold2Fill from './icon-menu-fold-2-fill.vue';

const IconMenuFold2Fill = Object.assign(_IconMenuFold2Fill, {
  install: (app: App) => {
    app.component(_IconMenuFold2Fill.name, _IconMenuFold2Fill);
  }
});

export default IconMenuFold2Fill;