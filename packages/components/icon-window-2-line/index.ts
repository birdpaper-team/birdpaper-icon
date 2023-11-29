import type { App } from 'vue';
import _IconWindow2Line from './icon-window-2-line.vue';

const IconWindow2Line = Object.assign(_IconWindow2Line, {
  install: (app: App) => {
    app.component(_IconWindow2Line.name, _IconWindow2Line);
  }
});

export default IconWindow2Line;