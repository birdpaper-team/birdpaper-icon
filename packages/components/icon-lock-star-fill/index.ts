import type { App } from 'vue';
import _IconLockStarFill from './icon-lock-star-fill.vue';

const IconLockStarFill = Object.assign(_IconLockStarFill, {
  install: (app: App) => {
    app.component(_IconLockStarFill.name, _IconLockStarFill);
  }
});

export default IconLockStarFill;