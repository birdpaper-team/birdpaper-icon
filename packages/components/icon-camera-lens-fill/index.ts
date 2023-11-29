import type { App } from 'vue';
import _IconCameraLensFill from './icon-camera-lens-fill.vue';

const IconCameraLensFill = Object.assign(_IconCameraLensFill, {
  install: (app: App) => {
    app.component(_IconCameraLensFill.name, _IconCameraLensFill);
  }
});

export default IconCameraLensFill;