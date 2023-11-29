import type { App } from 'vue';
import _IconMenu4Line from './icon-menu-4-line.vue';

const IconMenu4Line = Object.assign(_IconMenu4Line, {
  install: (app: App) => {
    app.component(_IconMenu4Line.name, _IconMenu4Line);
  }
});

export default IconMenu4Line;