import type { App } from 'vue';
import _IconFilePpt2Line from './icon-file-ppt-2-line.vue';

const IconFilePpt2Line = Object.assign(_IconFilePpt2Line, {
  install: (app: App) => {
    app.component(_IconFilePpt2Line.name, _IconFilePpt2Line);
  }
});

export default IconFilePpt2Line;