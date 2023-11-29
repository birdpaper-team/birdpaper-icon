import type { App } from 'vue';
import _IconMailLockFill from './icon-mail-lock-fill.vue';

const IconMailLockFill = Object.assign(_IconMailLockFill, {
  install: (app: App) => {
    app.component(_IconMailLockFill.name, _IconMailLockFill);
  }
});

export default IconMailLockFill;