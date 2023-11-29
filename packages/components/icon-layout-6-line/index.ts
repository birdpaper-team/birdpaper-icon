import type { App } from 'vue';
import _IconLayout6Line from './icon-layout-6-line.vue';

const IconLayout6Line = Object.assign(_IconLayout6Line, {
  install: (app: App) => {
    app.component(_IconLayout6Line.name, _IconLayout6Line);
  }
});

export default IconLayout6Line;