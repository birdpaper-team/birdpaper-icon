import type { App } from 'vue';
import _IconHandleUp from './icon-handle-up.vue';

const IconHandleUp = Object.assign(_IconHandleUp, {
  install: (app: App) => {
    app.component(_IconHandleUp.name, _IconHandleUp);
  }
});

export default IconHandleUp;