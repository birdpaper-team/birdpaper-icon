import type { App } from 'vue';
import _IconProgress3Line from './icon-progress-3-line.vue';

const IconProgress3Line = Object.assign(_IconProgress3Line, {
  install: (app: App) => {
    app.component(_IconProgress3Line.name, _IconProgress3Line);
  }
});

export default IconProgress3Line;