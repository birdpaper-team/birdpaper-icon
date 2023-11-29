import type { App } from 'vue';
import _IconUser5Line from './icon-user-5-line.vue';

const IconUser5Line = Object.assign(_IconUser5Line, {
  install: (app: App) => {
    app.component(_IconUser5Line.name, _IconUser5Line);
  }
});

export default IconUser5Line;