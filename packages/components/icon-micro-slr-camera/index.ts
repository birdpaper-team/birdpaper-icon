import type { App } from 'vue';
import _IconMicroSlrCamera from './icon-micro-slr-camera.vue';

const IconMicroSlrCamera = Object.assign(_IconMicroSlrCamera, {
  install: (app: App) => {
    app.component(_IconMicroSlrCamera.name, _IconMicroSlrCamera);
  }
});

export default IconMicroSlrCamera;