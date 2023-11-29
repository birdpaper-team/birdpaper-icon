import type { App } from 'vue';
import _IconInfraredThermometerLine from './icon-infrared-thermometer-line.vue';

const IconInfraredThermometerLine = Object.assign(_IconInfraredThermometerLine, {
  install: (app: App) => {
    app.component(_IconInfraredThermometerLine.name, _IconInfraredThermometerLine);
  }
});

export default IconInfraredThermometerLine;