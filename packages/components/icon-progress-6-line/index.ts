import type { App } from 'vue';
import _IconProgress6Line from './icon-progress-6-line.vue';

const IconProgress6Line = Object.assign(_IconProgress6Line, {
  install: (app: App) => {
    app.component(_IconProgress6Line.name, _IconProgress6Line);
  }
});

export default IconProgress6Line;