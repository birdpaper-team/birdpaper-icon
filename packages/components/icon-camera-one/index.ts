import type { App } from 'vue';
import _IconCameraOne from './icon-camera-one.vue';

const IconCameraOne = Object.assign(_IconCameraOne, {
  install: (app: App) => {
    app.component(_IconCameraOne.name, _IconCameraOne);
  }
});

export default IconCameraOne;