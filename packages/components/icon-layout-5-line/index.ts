import type { App } from 'vue';
import _IconLayout5Line from './icon-layout-5-line.vue';

const IconLayout5Line = Object.assign(_IconLayout5Line, {
  install: (app: App) => {
    app.component(_IconLayout5Line.name, _IconLayout5Line);
  }
});

export default IconLayout5Line;