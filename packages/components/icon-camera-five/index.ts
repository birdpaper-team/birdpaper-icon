import type { App } from 'vue';
import _IconCameraFive from './icon-camera-five.vue';

const IconCameraFive = Object.assign(_IconCameraFive, {
  install: (app: App) => {
    app.component(_IconCameraFive.name, _IconCameraFive);
  }
});

export default IconCameraFive;