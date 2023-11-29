import type { App } from 'vue';
import _IconFile2Line from './icon-file-2-line.vue';

const IconFile2Line = Object.assign(_IconFile2Line, {
  install: (app: App) => {
    app.component(_IconFile2Line.name, _IconFile2Line);
  }
});

export default IconFile2Line;