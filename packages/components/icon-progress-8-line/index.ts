import type { App } from 'vue';
import _IconProgress8Line from './icon-progress-8-line.vue';

const IconProgress8Line = Object.assign(_IconProgress8Line, {
  install: (app: App) => {
    app.component(_IconProgress8Line.name, _IconProgress8Line);
  }
});

export default IconProgress8Line;