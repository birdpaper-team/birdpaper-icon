import type { App } from 'vue';
import _IconFilter2Line from './icon-filter-2-line.vue';

const IconFilter2Line = Object.assign(_IconFilter2Line, {
  install: (app: App) => {
    app.component(_IconFilter2Line.name, _IconFilter2Line);
  }
});

export default IconFilter2Line;