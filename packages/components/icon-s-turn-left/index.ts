import type { App } from 'vue';
import _IconSTurnLeft from './icon-s-turn-left.vue';

const IconSTurnLeft = Object.assign(_IconSTurnLeft, {
  install: (app: App) => {
    app.component(_IconSTurnLeft.name, _IconSTurnLeft);
  }
});

export default IconSTurnLeft;