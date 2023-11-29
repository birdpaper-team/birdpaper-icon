import type { App } from 'vue';
import _IconSurveillanceCameras from './icon-surveillance-cameras.vue';

const IconSurveillanceCameras = Object.assign(_IconSurveillanceCameras, {
  install: (app: App) => {
    app.component(_IconSurveillanceCameras.name, _IconSurveillanceCameras);
  }
});

export default IconSurveillanceCameras;