import type { App } from 'vue';
import _IconBuilding4Line from './icon-building-4-line.vue';

const IconBuilding4Line = Object.assign(_IconBuilding4Line, {
  install: (app: App) => {
    app.component(_IconBuilding4Line.name, _IconBuilding4Line);
  }
});

export default IconBuilding4Line;