import type { App } from 'vue';
import _IconMenuFold3Line from './icon-menu-fold-3-line.vue';

const IconMenuFold3Line = Object.assign(_IconMenuFold3Line, {
  install: (app: App) => {
    app.component(_IconMenuFold3Line.name, _IconMenuFold3Line);
  }
});

export default IconMenuFold3Line;