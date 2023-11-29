import type { App } from 'vue';
import _IconResistor from './icon-resistor.vue';

const IconResistor = Object.assign(_IconResistor, {
  install: (app: App) => {
    app.component(_IconResistor.name, _IconResistor);
  }
});

export default IconResistor;