import type { App } from 'vue';
import _IconFile4Line from './icon-file-4-line.vue';

const IconFile4Line = Object.assign(_IconFile4Line, {
  install: (app: App) => {
    app.component(_IconFile4Line.name, _IconFile4Line);
  }
});

export default IconFile4Line;