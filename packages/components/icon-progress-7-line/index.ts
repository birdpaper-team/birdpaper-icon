import type { App } from 'vue';
import _IconProgress7Line from './icon-progress-7-line.vue';

const IconProgress7Line = Object.assign(_IconProgress7Line, {
  install: (app: App) => {
    app.component(_IconProgress7Line.name, _IconProgress7Line);
  }
});

export default IconProgress7Line;