import type { App } from 'vue';
import _IconHandleY from './icon-handle-y.vue';

const IconHandleY = Object.assign(_IconHandleY, {
  install: (app: App) => {
    app.component(_IconHandleY.name, _IconHandleY);
  }
});

export default IconHandleY;