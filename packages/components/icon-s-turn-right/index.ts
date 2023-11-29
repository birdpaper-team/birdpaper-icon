import type { App } from 'vue';
import _IconSTurnRight from './icon-s-turn-right.vue';

const IconSTurnRight = Object.assign(_IconSTurnRight, {
  install: (app: App) => {
    app.component(_IconSTurnRight.name, _IconSTurnRight);
  }
});

export default IconSTurnRight;