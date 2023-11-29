import type { App } from 'vue';
import _IconLockLine from './icon-lock-line.vue';

const IconLockLine = Object.assign(_IconLockLine, {
  install: (app: App) => {
    app.component(_IconLockLine.name, _IconLockLine);
  }
});

export default IconLockLine;