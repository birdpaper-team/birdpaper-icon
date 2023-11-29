import type { App } from 'vue';
import _IconHandleDown from './icon-handle-down.vue';

const IconHandleDown = Object.assign(_IconHandleDown, {
  install: (app: App) => {
    app.component(_IconHandleDown.name, _IconHandleDown);
  }
});

export default IconHandleDown;