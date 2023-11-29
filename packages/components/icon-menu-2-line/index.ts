import type { App } from 'vue';
import _IconMenu2Line from './icon-menu-2-line.vue';

const IconMenu2Line = Object.assign(_IconMenu2Line, {
  install: (app: App) => {
    app.component(_IconMenu2Line.name, _IconMenu2Line);
  }
});

export default IconMenu2Line;