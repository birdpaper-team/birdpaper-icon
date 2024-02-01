import type { App } from 'vue';
import _IconProgress5Line from './icon-progress-5-line.vue';

const IconProgress5Line = Object.assign(_IconProgress5Line, {
  install: (app: App) => {
    app.component(_IconProgress5Line.name, _IconProgress5Line);
  }
});

export default IconProgress5Line;