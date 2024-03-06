import type { App } from 'vue';
import _IconMenuUnfold3Fill from './icon-menu-unfold-3-fill.vue';

const IconMenuUnfold3Fill = Object.assign(_IconMenuUnfold3Fill, {
  install: (app: App) => {
    app.component(_IconMenuUnfold3Fill.name, _IconMenuUnfold3Fill);
  }
});

export default IconMenuUnfold3Fill;