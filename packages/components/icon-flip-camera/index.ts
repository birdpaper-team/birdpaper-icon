import type { App } from 'vue';
import _IconFlipCamera from './icon-flip-camera.vue';

const IconFlipCamera = Object.assign(_IconFlipCamera, {
  install: (app: App) => {
    app.component(_IconFlipCamera.name, _IconFlipCamera);
  }
});

export default IconFlipCamera;