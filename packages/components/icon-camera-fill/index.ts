import type { App } from 'vue';
import _IconCameraFill from './icon-camera-fill.vue';

const IconCameraFill = Object.assign(_IconCameraFill, {
  install: (app: App) => {
    app.component(_IconCameraFill.name, _IconCameraFill);
  }
});

export default IconCameraFill;