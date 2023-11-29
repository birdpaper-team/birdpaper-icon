import type { App } from 'vue';
import _IconThermometer from './icon-thermometer.vue';

const IconThermometer = Object.assign(_IconThermometer, {
  install: (app: App) => {
    app.component(_IconThermometer.name, _IconThermometer);
  }
});

export default IconThermometer;