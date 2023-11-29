import type { App } from 'vue';
import _IconBuilding3Line from './icon-building-3-line.vue';

const IconBuilding3Line = Object.assign(_IconBuilding3Line, {
  install: (app: App) => {
    app.component(_IconBuilding3Line.name, _IconBuilding3Line);
  }
});

export default IconBuilding3Line;