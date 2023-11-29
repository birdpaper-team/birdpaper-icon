import type { App } from 'vue';
import _IconInvertCamera from './icon-invert-camera.vue';

const IconInvertCamera = Object.assign(_IconInvertCamera, {
  install: (app: App) => {
    app.component(_IconInvertCamera.name, _IconInvertCamera);
  }
});

export default IconInvertCamera;