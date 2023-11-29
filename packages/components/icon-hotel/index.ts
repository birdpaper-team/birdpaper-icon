import type { App } from 'vue';
import _IconHotel from './icon-hotel.vue';

const IconHotel = Object.assign(_IconHotel, {
  install: (app: App) => {
    app.component(_IconHotel.name, _IconHotel);
  }
});

export default IconHotel;