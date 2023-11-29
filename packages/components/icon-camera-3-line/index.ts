import type { App } from 'vue';
import _IconCamera3Line from './icon-camera-3-line.vue';

const IconCamera3Line = Object.assign(_IconCamera3Line, {
  install: (app: App) => {
    app.component(_IconCamera3Line.name, _IconCamera3Line);
  }
});

export default IconCamera3Line;