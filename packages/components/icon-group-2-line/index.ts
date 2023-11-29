import type { App } from 'vue';
import _IconGroup2Line from './icon-group-2-line.vue';

const IconGroup2Line = Object.assign(_IconGroup2Line, {
  install: (app: App) => {
    app.component(_IconGroup2Line.name, _IconGroup2Line);
  }
});

export default IconGroup2Line;