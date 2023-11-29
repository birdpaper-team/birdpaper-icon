import type { App } from 'vue';
import _IconWebcamFill from './icon-webcam-fill.vue';

const IconWebcamFill = Object.assign(_IconWebcamFill, {
  install: (app: App) => {
    app.component(_IconWebcamFill.name, _IconWebcamFill);
  }
});

export default IconWebcamFill;