import type { App } from 'vue';
import _IconCameraOffLine from './icon-camera-off-line.vue';

const IconCameraOffLine = Object.assign(_IconCameraOffLine, {
  install: (app: App) => {
    app.component(_IconCameraOffLine.name, _IconCameraOffLine);
  }
});

export default IconCameraOffLine;