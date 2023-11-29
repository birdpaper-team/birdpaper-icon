import type { App } from 'vue';
import _IconEBike2Fill from './icon-e-bike-2-fill.vue';

const IconEBike2Fill = Object.assign(_IconEBike2Fill, {
  install: (app: App) => {
    app.component(_IconEBike2Fill.name, _IconEBike2Fill);
  }
});

export default IconEBike2Fill;