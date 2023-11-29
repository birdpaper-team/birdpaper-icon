import type { App } from 'vue';
import _IconHotelFill from './icon-hotel-fill.vue';

const IconHotelFill = Object.assign(_IconHotelFill, {
  install: (app: App) => {
    app.component(_IconHotelFill.name, _IconHotelFill);
  }
});

export default IconHotelFill;