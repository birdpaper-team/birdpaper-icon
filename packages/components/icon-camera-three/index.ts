import type { App } from 'vue';
import _IconCameraThree from './icon-camera-three.vue';

const IconCameraThree = Object.assign(_IconCameraThree, {
  install: (app: App) => {
    app.component(_IconCameraThree.name, _IconCameraThree);
  }
});

export default IconCameraThree;