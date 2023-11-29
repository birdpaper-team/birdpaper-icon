import type { App } from 'vue';
import _IconCake3Line from './icon-cake-3-line.vue';

const IconCake3Line = Object.assign(_IconCake3Line, {
  install: (app: App) => {
    app.component(_IconCake3Line.name, _IconCake3Line);
  }
});

export default IconCake3Line;