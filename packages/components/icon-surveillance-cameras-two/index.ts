import type { App } from 'vue';
import _IconSurveillanceCamerasTwo from './icon-surveillance-cameras-two.vue';

const IconSurveillanceCamerasTwo = Object.assign(_IconSurveillanceCamerasTwo, {
  install: (app: App) => {
    app.component(_IconSurveillanceCamerasTwo.name, _IconSurveillanceCamerasTwo);
  }
});

export default IconSurveillanceCamerasTwo;