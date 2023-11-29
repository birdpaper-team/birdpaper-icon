import type { App } from 'vue';
import _IconAmbulance from './icon-ambulance.vue';

const IconAmbulance = Object.assign(_IconAmbulance, {
  install: (app: App) => {
    app.component(_IconAmbulance.name, _IconAmbulance);
  }
});

export default IconAmbulance;