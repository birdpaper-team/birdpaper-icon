import type { App } from 'vue';
import _IconLayout2Line from './icon-layout-2-line.vue';

const IconLayout2Line = Object.assign(_IconLayout2Line, {
  install: (app: App) => {
    app.component(_IconLayout2Line.name, _IconLayout2Line);
  }
});

export default IconLayout2Line;