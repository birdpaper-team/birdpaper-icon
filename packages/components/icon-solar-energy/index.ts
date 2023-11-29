import type { App } from 'vue';
import _IconSolarEnergy from './icon-solar-energy.vue';

const IconSolarEnergy = Object.assign(_IconSolarEnergy, {
  install: (app: App) => {
    app.component(_IconSolarEnergy.name, _IconSolarEnergy);
  }
});

export default IconSolarEnergy;