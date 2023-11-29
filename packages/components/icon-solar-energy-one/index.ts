import type { App } from 'vue';
import _IconSolarEnergyOne from './icon-solar-energy-one.vue';

const IconSolarEnergyOne = Object.assign(_IconSolarEnergyOne, {
  install: (app: App) => {
    app.component(_IconSolarEnergyOne.name, _IconSolarEnergyOne);
  }
});

export default IconSolarEnergyOne;