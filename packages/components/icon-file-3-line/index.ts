import type { App } from 'vue';
import _IconFile3Line from './icon-file-3-line.vue';

const IconFile3Line = Object.assign(_IconFile3Line, {
  install: (app: App) => {
    app.component(_IconFile3Line.name, _IconFile3Line);
  }
});

export default IconFile3Line;