import type { App } from 'vue';
import _IconHandDown from './icon-hand-down.vue';

const IconHandDown = Object.assign(_IconHandDown, {
  install: (app: App) => {
    app.component(_IconHandDown.name, _IconHandDown);
  }
});

export default IconHandDown;