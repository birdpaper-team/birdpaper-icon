import type { App } from 'vue';
import _IconLockFill from './icon-lock-fill.vue';

const IconLockFill = Object.assign(_IconLockFill, {
  install: (app: App) => {
    app.component(_IconLockFill.name, _IconLockFill);
  }
});

export default IconLockFill;