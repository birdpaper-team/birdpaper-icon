import type { App } from 'vue';
import _IconFlightSafety from './icon-flight-safety.vue';

const IconFlightSafety = Object.assign(_IconFlightSafety, {
  install: (app: App) => {
    app.component(_IconFlightSafety.name, _IconFlightSafety);
  }
});

export default IconFlightSafety;