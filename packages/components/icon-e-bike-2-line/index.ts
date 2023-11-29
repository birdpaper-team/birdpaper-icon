import type { App } from 'vue';
import _IconEBike2Line from './icon-e-bike-2-line.vue';

const IconEBike2Line = Object.assign(_IconEBike2Line, {
  install: (app: App) => {
    app.component(_IconEBike2Line.name, _IconEBike2Line);
  }
});

export default IconEBike2Line;