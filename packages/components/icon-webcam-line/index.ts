import type { App } from 'vue';
import _IconWebcamLine from './icon-webcam-line.vue';

const IconWebcamLine = Object.assign(_IconWebcamLine, {
  install: (app: App) => {
    app.component(_IconWebcamLine.name, _IconWebcamLine);
  }
});

export default IconWebcamLine;