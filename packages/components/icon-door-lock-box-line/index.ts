import type { App } from 'vue';
import _IconDoorLockBoxLine from './icon-door-lock-box-line.vue';

const IconDoorLockBoxLine = Object.assign(_IconDoorLockBoxLine, {
  install: (app: App) => {
    app.component(_IconDoorLockBoxLine.name, _IconDoorLockBoxLine);
  }
});

export default IconDoorLockBoxLine;