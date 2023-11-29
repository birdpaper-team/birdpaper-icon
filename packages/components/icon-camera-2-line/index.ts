import type { App } from 'vue';
import _IconCamera2Line from './icon-camera-2-line.vue';

const IconCamera2Line = Object.assign(_IconCamera2Line, {
  install: (app: App) => {
    app.component(_IconCamera2Line.name, _IconCamera2Line);
  }
});

export default IconCamera2Line;