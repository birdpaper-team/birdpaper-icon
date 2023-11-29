import type { App } from 'vue';
import _IconSTurnDown from './icon-s-turn-down.vue';

const IconSTurnDown = Object.assign(_IconSTurnDown, {
  install: (app: App) => {
    app.component(_IconSTurnDown.name, _IconSTurnDown);
  }
});

export default IconSTurnDown;