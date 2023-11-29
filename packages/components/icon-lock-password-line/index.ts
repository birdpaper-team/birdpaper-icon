import type { App } from 'vue';
import _IconLockPasswordLine from './icon-lock-password-line.vue';

const IconLockPasswordLine = Object.assign(_IconLockPasswordLine, {
  install: (app: App) => {
    app.component(_IconLockPasswordLine.name, _IconLockPasswordLine);
  }
});

export default IconLockPasswordLine;