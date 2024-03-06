import type { App } from 'vue';
import _IconMenuFold4Line from './icon-menu-fold-4-line.vue';

const IconMenuFold4Line = Object.assign(_IconMenuFold4Line, {
  install: (app: App) => {
    app.component(_IconMenuFold4Line.name, _IconMenuFold4Line);
  }
});

export default IconMenuFold4Line;