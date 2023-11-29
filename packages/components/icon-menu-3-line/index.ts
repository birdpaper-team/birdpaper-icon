import type { App } from 'vue';
import _IconMenu3Line from './icon-menu-3-line.vue';

const IconMenu3Line = Object.assign(_IconMenu3Line, {
  install: (app: App) => {
    app.component(_IconMenu3Line.name, _IconMenu3Line);
  }
});

export default IconMenu3Line;