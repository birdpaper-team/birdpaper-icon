import type { App } from 'vue';
import _IconHotelLine from './icon-hotel-line.vue';

const IconHotelLine = Object.assign(_IconHotelLine, {
  install: (app: App) => {
    app.component(_IconHotelLine.name, _IconHotelLine);
  }
});

export default IconHotelLine;