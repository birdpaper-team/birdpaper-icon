import type { App } from 'vue';
import _IconShape2Line from './icon-shape-2-line.vue';

const IconShape2Line = Object.assign(_IconShape2Line, {
  install: (app: App) => {
    app.component(_IconShape2Line.name, _IconShape2Line);
  }
});

export default IconShape2Line;