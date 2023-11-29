import type { App } from 'vue';
import _IconHotelBedFill from './icon-hotel-bed-fill.vue';

const IconHotelBedFill = Object.assign(_IconHotelBedFill, {
  install: (app: App) => {
    app.component(_IconHotelBedFill.name, _IconHotelBedFill);
  }
});

export default IconHotelBedFill;