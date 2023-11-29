import type { App } from 'vue';
import _IconUser6Line from './icon-user-6-line.vue';

const IconUser6Line = Object.assign(_IconUser6Line, {
  install: (app: App) => {
    app.component(_IconUser6Line.name, _IconUser6Line);
  }
});

export default IconUser6Line;