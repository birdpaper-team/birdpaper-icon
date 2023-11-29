import type { App } from 'vue';
import _IconMenuUnfold from './icon-menu-unfold.vue';

const IconMenuUnfold = Object.assign(_IconMenuUnfold, {
  install: (app: App) => {
    app.component(_IconMenuUnfold.name, _IconMenuUnfold);
  }
});

export default IconMenuUnfold;