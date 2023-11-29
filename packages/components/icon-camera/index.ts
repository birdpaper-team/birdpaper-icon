import type { App } from 'vue';
import _IconCamera from './icon-camera.vue';

const IconCamera = Object.assign(_IconCamera, {
  install: (app: App) => {
    app.component(_IconCamera.name, _IconCamera);
  }
});

export default IconCamera;