import type { App } from 'vue';
import _IconFileLockLine from './icon-file-lock-line.vue';

const IconFileLockLine = Object.assign(_IconFileLockLine, {
  install: (app: App) => {
    app.component(_IconFileLockLine.name, _IconFileLockLine);
  }
});

export default IconFileLockLine;