import type { App } from 'vue';
import _IconCameraOffFill from './icon-camera-off-fill.vue';

const IconCameraOffFill = Object.assign(_IconCameraOffFill, {
  install: (app: App) => {
    app.component(_IconCameraOffFill.name, _IconCameraOffFill);
  }
});

export default IconCameraOffFill;