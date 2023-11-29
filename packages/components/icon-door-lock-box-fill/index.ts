import type { App } from 'vue';
import _IconDoorLockBoxFill from './icon-door-lock-box-fill.vue';

const IconDoorLockBoxFill = Object.assign(_IconDoorLockBoxFill, {
  install: (app: App) => {
    app.component(_IconDoorLockBoxFill.name, _IconDoorLockBoxFill);
  }
});

export default IconDoorLockBoxFill;