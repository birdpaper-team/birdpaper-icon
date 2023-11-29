import type { App } from 'vue';
import _IconDeleteBack2Line from './icon-delete-back-2-line.vue';

const IconDeleteBack2Line = Object.assign(_IconDeleteBack2Line, {
  install: (app: App) => {
    app.component(_IconDeleteBack2Line.name, _IconDeleteBack2Line);
  }
});

export default IconDeleteBack2Line;