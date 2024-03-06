import type { App } from 'vue';
import _IconMenuUnfold4Line from './icon-menu-unfold-4-line.vue';

const IconMenuUnfold4Line = Object.assign(_IconMenuUnfold4Line, {
  install: (app: App) => {
    app.component(_IconMenuUnfold4Line.name, _IconMenuUnfold4Line);
  }
});

export default IconMenuUnfold4Line;