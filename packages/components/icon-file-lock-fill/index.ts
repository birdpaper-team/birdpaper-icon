import type { App } from 'vue';
import _IconFileLockFill from './icon-file-lock-fill.vue';

const IconFileLockFill = Object.assign(_IconFileLockFill, {
  install: (app: App) => {
    app.component(_IconFileLockFill.name, _IconFileLockFill);
  }
});

export default IconFileLockFill;