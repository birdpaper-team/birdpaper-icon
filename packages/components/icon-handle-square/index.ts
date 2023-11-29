import type { App } from 'vue';
import _IconHandleSquare from './icon-handle-square.vue';

const IconHandleSquare = Object.assign(_IconHandleSquare, {
  install: (app: App) => {
    app.component(_IconHandleSquare.name, _IconHandleSquare);
  }
});

export default IconHandleSquare;