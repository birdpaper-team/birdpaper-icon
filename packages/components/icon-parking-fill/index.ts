import type { App } from 'vue';
import _IconParkingFill from './icon-parking-fill.vue';

const IconParkingFill = Object.assign(_IconParkingFill, {
  install: (app: App) => {
    app.component(_IconParkingFill.name, _IconParkingFill);
  }
});

export default IconParkingFill;