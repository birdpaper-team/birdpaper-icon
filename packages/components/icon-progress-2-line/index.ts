import type { App } from 'vue';
import _IconProgress2Line from './icon-progress-2-line.vue';

const IconProgress2Line = Object.assign(_IconProgress2Line, {
  install: (app: App) => {
    app.component(_IconProgress2Line.name, _IconProgress2Line);
  }
});

export default IconProgress2Line;