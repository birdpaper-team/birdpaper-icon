import type { App } from 'vue';
import _IconProgress1Line from './icon-progress-1-line.vue';

const IconProgress1Line = Object.assign(_IconProgress1Line, {
  install: (app: App) => {
    app.component(_IconProgress1Line.name, _IconProgress1Line);
  }
});

export default IconProgress1Line;