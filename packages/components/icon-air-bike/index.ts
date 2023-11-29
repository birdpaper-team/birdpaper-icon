import type { App } from 'vue';
import _IconAirBike from './icon-air-bike.vue';

const IconAirBike = Object.assign(_IconAirBike, {
  install: (app: App) => {
    app.component(_IconAirBike.name, _IconAirBike);
  }
});

export default IconAirBike;