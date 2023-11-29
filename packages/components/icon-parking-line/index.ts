import type { App } from 'vue';
import _IconParkingLine from './icon-parking-line.vue';

const IconParkingLine = Object.assign(_IconParkingLine, {
  install: (app: App) => {
    app.component(_IconParkingLine.name, _IconParkingLine);
  }
});

export default IconParkingLine;