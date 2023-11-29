import type { App } from 'vue';
import _IconPowerSupplyOne from './icon-power-supply-one.vue';

const IconPowerSupplyOne = Object.assign(_IconPowerSupplyOne, {
  install: (app: App) => {
    app.component(_IconPowerSupplyOne.name, _IconPowerSupplyOne);
  }
});

export default IconPowerSupplyOne;