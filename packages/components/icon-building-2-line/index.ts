import type { App } from 'vue';
import _IconBuilding2Line from './icon-building-2-line.vue';

const IconBuilding2Line = Object.assign(_IconBuilding2Line, {
  install: (app: App) => {
    app.component(_IconBuilding2Line.name, _IconBuilding2Line);
  }
});

export default IconBuilding2Line;