import type { App } from 'vue';
import _IconFilter3Line from './icon-filter-3-line.vue';

const IconFilter3Line = Object.assign(_IconFilter3Line, {
  install: (app: App) => {
    app.component(_IconFilter3Line.name, _IconFilter3Line);
  }
});

export default IconFilter3Line;