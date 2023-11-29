import type { App } from 'vue';
import _IconHotelPleaseClean from './icon-hotel-please-clean.vue';

const IconHotelPleaseClean = Object.assign(_IconHotelPleaseClean, {
  install: (app: App) => {
    app.component(_IconHotelPleaseClean.name, _IconHotelPleaseClean);
  }
});

export default IconHotelPleaseClean;