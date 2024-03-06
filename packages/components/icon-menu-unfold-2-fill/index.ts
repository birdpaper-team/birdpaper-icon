import type { App } from 'vue';
import _IconMenuUnfold2Fill from './icon-menu-unfold-2-fill.vue';

const IconMenuUnfold2Fill = Object.assign(_IconMenuUnfold2Fill, {
  install: (app: App) => {
    app.component(_IconMenuUnfold2Fill.name, _IconMenuUnfold2Fill);
  }
});

export default IconMenuUnfold2Fill;