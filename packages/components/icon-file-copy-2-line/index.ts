import type { App } from 'vue';
import _IconFileCopy2Line from './icon-file-copy-2-line.vue';

const IconFileCopy2Line = Object.assign(_IconFileCopy2Line, {
  install: (app: App) => {
    app.component(_IconFileCopy2Line.name, _IconFileCopy2Line);
  }
});

export default IconFileCopy2Line;