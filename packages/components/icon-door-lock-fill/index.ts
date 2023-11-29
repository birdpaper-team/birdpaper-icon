import type { App } from 'vue';
import _IconDoorLockFill from './icon-door-lock-fill.vue';

const IconDoorLockFill = Object.assign(_IconDoorLockFill, {
  install: (app: App) => {
    app.component(_IconDoorLockFill.name, _IconDoorLockFill);
  }
});

export default IconDoorLockFill;