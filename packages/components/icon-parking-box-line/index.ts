import type { App } from 'vue';
import _IconParkingBoxLine from './icon-parking-box-line.vue';

const IconParkingBoxLine = Object.assign(_IconParkingBoxLine, {
  install: (app: App) => {
    app.component(_IconParkingBoxLine.name, _IconParkingBoxLine);
  }
});

export default IconParkingBoxLine;