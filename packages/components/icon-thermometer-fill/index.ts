import type { App } from 'vue';
import _IconThermometerFill from './icon-thermometer-fill.vue';

const IconThermometerFill = Object.assign(_IconThermometerFill, {
  install: (app: App) => {
    app.component(_IconThermometerFill.name, _IconThermometerFill);
  }
});

export default IconThermometerFill;