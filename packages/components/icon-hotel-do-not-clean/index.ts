import type { App } from 'vue';
import _IconHotelDoNotClean from './icon-hotel-do-not-clean.vue';

const IconHotelDoNotClean = Object.assign(_IconHotelDoNotClean, {
  install: (app: App) => {
    app.component(_IconHotelDoNotClean.name, _IconHotelDoNotClean);
  }
});

export default IconHotelDoNotClean;