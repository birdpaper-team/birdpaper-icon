import type { App } from 'vue';
import _IconLayoutGrid2Line from './icon-layout-grid-2-line.vue';

const IconLayoutGrid2Line = Object.assign(_IconLayoutGrid2Line, {
  install: (app: App) => {
    app.component(_IconLayoutGrid2Line.name, _IconLayoutGrid2Line);
  }
});

export default IconLayoutGrid2Line;