import type { App } from 'vue';
import _IconWebcam from './icon-webcam.vue';

const IconWebcam = Object.assign(_IconWebcam, {
  install: (app: App) => {
    app.component(_IconWebcam.name, _IconWebcam);
  }
});

export default IconWebcam;