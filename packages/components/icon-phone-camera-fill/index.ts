import type { App } from 'vue';
import _IconPhoneCameraFill from './icon-phone-camera-fill.vue';

const IconPhoneCameraFill = Object.assign(_IconPhoneCameraFill, {
  install: (app: App) => {
    app.component(_IconPhoneCameraFill.name, _IconPhoneCameraFill);
  }
});

export default IconPhoneCameraFill;