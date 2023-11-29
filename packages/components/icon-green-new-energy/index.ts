import type { App } from 'vue';
import _IconGreenNewEnergy from './icon-green-new-energy.vue';

const IconGreenNewEnergy = Object.assign(_IconGreenNewEnergy, {
  install: (app: App) => {
    app.component(_IconGreenNewEnergy.name, _IconGreenNewEnergy);
  }
});

export default IconGreenNewEnergy;