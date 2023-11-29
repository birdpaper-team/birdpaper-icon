import type { App } from 'vue';
import _IconMouse from './icon-mouse.vue';

const IconMouse = Object.assign(_IconMouse, {
  install: (app: App) => {
    app.component(_IconMouse.name, _IconMouse);
  }
});

export default IconMouse;