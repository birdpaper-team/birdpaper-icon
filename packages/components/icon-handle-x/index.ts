import type { App } from 'vue';
import _IconHandleX from './icon-handle-x.vue';

const IconHandleX = Object.assign(_IconHandleX, {
  install: (app: App) => {
    app.component(_IconHandleX.name, _IconHandleX);
  }
});

export default IconHandleX;