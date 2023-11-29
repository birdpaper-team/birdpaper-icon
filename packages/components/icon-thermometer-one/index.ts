import type { App } from 'vue';
import _IconThermometerOne from './icon-thermometer-one.vue';

const IconThermometerOne = Object.assign(_IconThermometerOne, {
  install: (app: App) => {
    app.component(_IconThermometerOne.name, _IconThermometerOne);
  }
});

export default IconThermometerOne;