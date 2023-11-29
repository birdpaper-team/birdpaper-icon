import type { App } from 'vue';
import _IconLockPasswordFill from './icon-lock-password-fill.vue';

const IconLockPasswordFill = Object.assign(_IconLockPasswordFill, {
  install: (app: App) => {
    app.component(_IconLockPasswordFill.name, _IconLockPasswordFill);
  }
});

export default IconLockPasswordFill;