import type { App } from 'vue';
import _IconFlightTakeoffLine from './icon-flight-takeoff-line.vue';

const IconFlightTakeoffLine = Object.assign(_IconFlightTakeoffLine, {
  install: (app: App) => {
    app.component(_IconFlightTakeoffLine.name, _IconFlightTakeoffLine);
  }
});

export default IconFlightTakeoffLine;