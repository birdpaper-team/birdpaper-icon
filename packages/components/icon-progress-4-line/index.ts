import type { App } from 'vue';
import _IconProgress4Line from './icon-progress-4-line.vue';

const IconProgress4Line = Object.assign(_IconProgress4Line, {
  install: (app: App) => {
    app.component(_IconProgress4Line.name, _IconProgress4Line);
  }
});

export default IconProgress4Line;