import type { App } from 'vue';
import _IconFlightLandFill from './icon-flight-land-fill.vue';

const IconFlightLandFill = Object.assign(_IconFlightLandFill, {
  install: (app: App) => {
    app.component(_IconFlightLandFill.name, _IconFlightLandFill);
  }
});

export default IconFlightLandFill;