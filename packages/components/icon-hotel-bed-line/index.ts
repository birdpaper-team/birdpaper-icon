import type { App } from 'vue';
import _IconHotelBedLine from './icon-hotel-bed-line.vue';

const IconHotelBedLine = Object.assign(_IconHotelBedLine, {
  install: (app: App) => {
    app.component(_IconHotelBedLine.name, _IconHotelBedLine);
  }
});

export default IconHotelBedLine;