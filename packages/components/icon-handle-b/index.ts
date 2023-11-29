import type { App } from 'vue';
import _IconHandleB from './icon-handle-b.vue';

const IconHandleB = Object.assign(_IconHandleB, {
  install: (app: App) => {
    app.component(_IconHandleB.name, _IconHandleB);
  }
});

export default IconHandleB;