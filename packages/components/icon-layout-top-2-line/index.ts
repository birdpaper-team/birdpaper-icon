import type { App } from 'vue';
import _IconLayoutTop2Line from './icon-layout-top-2-line.vue';

const IconLayoutTop2Line = Object.assign(_IconLayoutTop2Line, {
  install: (app: App) => {
    app.component(_IconLayoutTop2Line.name, _IconLayoutTop2Line);
  }
});

export default IconLayoutTop2Line;