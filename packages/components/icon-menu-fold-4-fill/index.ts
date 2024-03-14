import type { App } from 'vue';
import _IconMenuFold4Fill from './icon-menu-fold-4-fill.vue';

const IconMenuFold4Fill = Object.assign(_IconMenuFold4Fill, {
  install: (app: App) => {
    app.component(_IconMenuFold4Fill.name, _IconMenuFold4Fill);
  }
});

export default IconMenuFold4Fill;