import type { App } from 'vue';
import _IconHandleLeft from './icon-handle-left.vue';

const IconHandleLeft = Object.assign(_IconHandleLeft, {
  install: (app: App) => {
    app.component(_IconHandleLeft.name, _IconHandleLeft);
  }
});

export default IconHandleLeft;