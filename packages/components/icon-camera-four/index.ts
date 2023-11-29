import type { App } from 'vue';
import _IconCameraFour from './icon-camera-four.vue';

const IconCameraFour = Object.assign(_IconCameraFour, {
  install: (app: App) => {
    app.component(_IconCameraFour.name, _IconCameraFour);
  }
});

export default IconCameraFour;