import type { App } from 'vue';
import _IconPhoneCameraLine from './icon-phone-camera-line.vue';

const IconPhoneCameraLine = Object.assign(_IconPhoneCameraLine, {
  install: (app: App) => {
    app.component(_IconPhoneCameraLine.name, _IconPhoneCameraLine);
  }
});

export default IconPhoneCameraLine;