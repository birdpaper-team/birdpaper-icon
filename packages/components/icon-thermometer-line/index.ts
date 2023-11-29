import type { App } from 'vue';
import _IconThermometerLine from './icon-thermometer-line.vue';

const IconThermometerLine = Object.assign(_IconThermometerLine, {
  install: (app: App) => {
    app.component(_IconThermometerLine.name, _IconThermometerLine);
  }
});

export default IconThermometerLine;