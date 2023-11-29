import type { App } from 'vue';
import _IconCake2Line from './icon-cake-2-line.vue';

const IconCake2Line = Object.assign(_IconCake2Line, {
  install: (app: App) => {
    app.component(_IconCake2Line.name, _IconCake2Line);
  }
});

export default IconCake2Line;