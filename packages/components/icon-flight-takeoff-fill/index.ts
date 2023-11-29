import type { App } from 'vue';
import _IconFlightTakeoffFill from './icon-flight-takeoff-fill.vue';

const IconFlightTakeoffFill = Object.assign(_IconFlightTakeoffFill, {
  install: (app: App) => {
    app.component(_IconFlightTakeoffFill.name, _IconFlightTakeoffFill);
  }
});

export default IconFlightTakeoffFill;