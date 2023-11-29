import type { App } from 'vue';
import _IconLockUnlockLine from './icon-lock-unlock-line.vue';

const IconLockUnlockLine = Object.assign(_IconLockUnlockLine, {
  install: (app: App) => {
    app.component(_IconLockUnlockLine.name, _IconLockUnlockLine);
  }
});

export default IconLockUnlockLine;