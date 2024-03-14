import type { App } from 'vue';
import _IconMenuUnfold4Fill from './icon-menu-unfold-4-fill.vue';

const IconMenuUnfold4Fill = Object.assign(_IconMenuUnfold4Fill, {
  install: (app: App) => {
    app.component(_IconMenuUnfold4Fill.name, _IconMenuUnfold4Fill);
  }
});

export default IconMenuUnfold4Fill;