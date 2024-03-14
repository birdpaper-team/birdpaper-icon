import type { App } from 'vue';
import _IconMenuFold2Line from './icon-menu-fold-2-line.vue';

const IconMenuFold2Line = Object.assign(_IconMenuFold2Line, {
  install: (app: App) => {
    app.component(_IconMenuFold2Line.name, _IconMenuFold2Line);
  }
});

export default IconMenuFold2Line;