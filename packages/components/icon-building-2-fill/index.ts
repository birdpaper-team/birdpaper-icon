import type { App } from 'vue';
import _IconBuilding2Fill from './icon-building-2-fill.vue';

const IconBuilding2Fill = Object.assign(_IconBuilding2Fill, {
  install: (app: App) => {
    app.component(_IconBuilding2Fill.name, _IconBuilding2Fill);
  }
});

export default IconBuilding2Fill;