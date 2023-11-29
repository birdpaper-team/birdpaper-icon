import type { App } from 'vue';
import _IconLockOne from './icon-lock-one.vue';

const IconLockOne = Object.assign(_IconLockOne, {
  install: (app: App) => {
    app.component(_IconLockOne.name, _IconLockOne);
  }
});

export default IconLockOne;