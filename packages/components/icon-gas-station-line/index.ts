import type { App } from 'vue';
import _IconGasStationLine from './icon-gas-station-line.vue';

const IconGasStationLine = Object.assign(_IconGasStationLine, {
  install: (app: App) => {
    app.component(_IconGasStationLine.name, _IconGasStationLine);
  }
});

export default IconGasStationLine;