import type { App } from 'vue';
import _IconMenuUnfold3Line from './icon-menu-unfold-3-line.vue';

const IconMenuUnfold3Line = Object.assign(_IconMenuUnfold3Line, {
  install: (app: App) => {
    app.component(_IconMenuUnfold3Line.name, _IconMenuUnfold3Line);
  }
});

export default IconMenuUnfold3Line;