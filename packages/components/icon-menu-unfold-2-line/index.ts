import type { App } from 'vue';
import _IconMenuUnfold2Line from './icon-menu-unfold-2-line.vue';

const IconMenuUnfold2Line = Object.assign(_IconMenuUnfold2Line, {
  install: (app: App) => {
    app.component(_IconMenuUnfold2Line.name, _IconMenuUnfold2Line);
  }
});

export default IconMenuUnfold2Line;