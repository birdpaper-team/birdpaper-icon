import type { App } from 'vue';
import _IconUser2Line from './icon-user-2-line.vue';

const IconUser2Line = Object.assign(_IconUser2Line, {
  install: (app: App) => {
    app.component(_IconUser2Line.name, _IconUser2Line);
  }
});

export default IconUser2Line;