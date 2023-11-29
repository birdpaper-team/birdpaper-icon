import type { App } from 'vue';
import _IconUser4Line from './icon-user-4-line.vue';

const IconUser4Line = Object.assign(_IconUser4Line, {
  install: (app: App) => {
    app.component(_IconUser4Line.name, _IconUser4Line);
  }
});

export default IconUser4Line;