import type { App } from 'vue';
import _IconMenu5Line from './icon-menu-5-line.vue';

const IconMenu5Line = Object.assign(_IconMenu5Line, {
  install: (app: App) => {
    app.component(_IconMenu5Line.name, _IconMenu5Line);
  }
});

export default IconMenu5Line;