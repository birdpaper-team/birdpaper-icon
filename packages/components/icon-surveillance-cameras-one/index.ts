import type { App } from 'vue';
import _IconSurveillanceCamerasOne from './icon-surveillance-cameras-one.vue';

const IconSurveillanceCamerasOne = Object.assign(_IconSurveillanceCamerasOne, {
  install: (app: App) => {
    app.component(_IconSurveillanceCamerasOne.name, _IconSurveillanceCamerasOne);
  }
});

export default IconSurveillanceCamerasOne;