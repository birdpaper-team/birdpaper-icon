import type { App } from 'vue';
import _IconMenuFold3Fill from './icon-menu-fold-3-fill.vue';

const IconMenuFold3Fill = Object.assign(_IconMenuFold3Fill, {
  install: (app: App) => {
    app.component(_IconMenuFold3Fill.name, _IconMenuFold3Fill);
  }
});

export default IconMenuFold3Fill;