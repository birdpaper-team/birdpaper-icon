import type { App } from 'vue';
import _IconBuilding4Fill from './icon-building-4-fill.vue';

const IconBuilding4Fill = Object.assign(_IconBuilding4Fill, {
  install: (app: App) => {
    app.component(_IconBuilding4Fill.name, _IconBuilding4Fill);
  }
});

export default IconBuilding4Fill;