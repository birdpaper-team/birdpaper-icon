import type { App } from 'vue';
import _IconCameraSwitchLine from './icon-camera-switch-line.vue';

const IconCameraSwitchLine = Object.assign(_IconCameraSwitchLine, {
  install: (app: App) => {
    app.component(_IconCameraSwitchLine.name, _IconCameraSwitchLine);
  }
});

export default IconCameraSwitchLine;