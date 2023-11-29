import type { App } from 'vue';
import _IconLockUnlockFill from './icon-lock-unlock-fill.vue';

const IconLockUnlockFill = Object.assign(_IconLockUnlockFill, {
  install: (app: App) => {
    app.component(_IconLockUnlockFill.name, _IconLockUnlockFill);
  }
});

export default IconLockUnlockFill;