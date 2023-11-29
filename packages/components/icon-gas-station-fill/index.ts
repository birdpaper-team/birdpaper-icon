import type { App } from 'vue';
import _IconGasStationFill from './icon-gas-station-fill.vue';

const IconGasStationFill = Object.assign(_IconGasStationFill, {
  install: (app: App) => {
    app.component(_IconGasStationFill.name, _IconGasStationFill);
  }
});

export default IconGasStationFill;