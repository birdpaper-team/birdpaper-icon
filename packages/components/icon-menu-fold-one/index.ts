import type { App } from 'vue';
import _IconMenuFoldOne from './icon-menu-fold-one.vue';

const IconMenuFoldOne = Object.assign(_IconMenuFoldOne, {
  install: (app: App) => {
    app.component(_IconMenuFoldOne.name, _IconMenuFoldOne);
  }
});

export default IconMenuFoldOne;