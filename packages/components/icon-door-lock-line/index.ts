import type { App } from 'vue';
import _IconDoorLockLine from './icon-door-lock-line.vue';

const IconDoorLockLine = Object.assign(_IconDoorLockLine, {
  install: (app: App) => {
    app.component(_IconDoorLockLine.name, _IconDoorLockLine);
  }
});

export default IconDoorLockLine;