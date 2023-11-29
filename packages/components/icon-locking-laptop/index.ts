import type { App } from 'vue';
import _IconLockingLaptop from './icon-locking-laptop.vue';

const IconLockingLaptop = Object.assign(_IconLockingLaptop, {
  install: (app: App) => {
    app.component(_IconLockingLaptop.name, _IconLockingLaptop);
  }
});

export default IconLockingLaptop;