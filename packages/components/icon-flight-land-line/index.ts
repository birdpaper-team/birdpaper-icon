import type { App } from 'vue';
import _IconFlightLandLine from './icon-flight-land-line.vue';

const IconFlightLandLine = Object.assign(_IconFlightLandLine, {
  install: (app: App) => {
    app.component(_IconFlightLandLine.name, _IconFlightLandLine);
  }
});

export default IconFlightLandLine;