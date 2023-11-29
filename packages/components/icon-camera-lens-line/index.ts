import type { App } from 'vue';
import _IconCameraLensLine from './icon-camera-lens-line.vue';

const IconCameraLensLine = Object.assign(_IconCameraLensLine, {
  install: (app: App) => {
    app.component(_IconCameraLensLine.name, _IconCameraLensLine);
  }
});

export default IconCameraLensLine;