import type { App } from 'vue';
import _IconParkingBoxFill from './icon-parking-box-fill.vue';

const IconParkingBoxFill = Object.assign(_IconParkingBoxFill, {
  install: (app: App) => {
    app.component(_IconParkingBoxFill.name, _IconParkingBoxFill);
  }
});

export default IconParkingBoxFill;