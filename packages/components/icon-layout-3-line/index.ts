import type { App } from 'vue';
import _IconLayout3Line from './icon-layout-3-line.vue';

const IconLayout3Line = Object.assign(_IconLayout3Line, {
  install: (app: App) => {
    app.component(_IconLayout3Line.name, _IconLayout3Line);
  }
});

export default IconLayout3Line;