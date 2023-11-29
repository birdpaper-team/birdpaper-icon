import type { App } from 'vue';
import _IconInfraredThermometerFill from './icon-infrared-thermometer-fill.vue';

const IconInfraredThermometerFill = Object.assign(_IconInfraredThermometerFill, {
  install: (app: App) => {
    app.component(_IconInfraredThermometerFill.name, _IconInfraredThermometerFill);
  }
});

export default IconInfraredThermometerFill;