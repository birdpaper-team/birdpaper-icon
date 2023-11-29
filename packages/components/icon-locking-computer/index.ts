import type { App } from 'vue';
import _IconLockingComputer from './icon-locking-computer.vue';

const IconLockingComputer = Object.assign(_IconLockingComputer, {
  install: (app: App) => {
    app.component(_IconLockingComputer.name, _IconLockingComputer);
  }
});

export default IconLockingComputer;