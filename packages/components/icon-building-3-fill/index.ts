import type { App } from 'vue';
import _IconBuilding3Fill from './icon-building-3-fill.vue';

const IconBuilding3Fill = Object.assign(_IconBuilding3Fill, {
  install: (app: App) => {
    app.component(_IconBuilding3Fill.name, _IconBuilding3Fill);
  }
});

export default IconBuilding3Fill;