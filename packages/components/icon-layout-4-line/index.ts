import type { App } from 'vue';
import _IconLayout4Line from './icon-layout-4-line.vue';

const IconLayout4Line = Object.assign(_IconLayout4Line, {
  install: (app: App) => {
    app.component(_IconLayout4Line.name, _IconLayout4Line);
  }
});

export default IconLayout4Line;