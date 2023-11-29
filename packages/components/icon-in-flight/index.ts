import type { App } from 'vue';
import _IconInFlight from './icon-in-flight.vue';

const IconInFlight = Object.assign(_IconInFlight, {
  install: (app: App) => {
    app.component(_IconInFlight.name, _IconInFlight);
  }
});

export default IconInFlight;