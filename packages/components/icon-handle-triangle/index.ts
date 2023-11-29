import type { App } from 'vue';
import _IconHandleTriangle from './icon-handle-triangle.vue';

const IconHandleTriangle = Object.assign(_IconHandleTriangle, {
  install: (app: App) => {
    app.component(_IconHandleTriangle.name, _IconHandleTriangle);
  }
});

export default IconHandleTriangle;