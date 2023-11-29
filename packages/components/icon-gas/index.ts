import type { App } from 'vue';
import _IconGas from './icon-gas.vue';

const IconGas = Object.assign(_IconGas, {
  install: (app: App) => {
    app.component(_IconGas.name, _IconGas);
  }
});

export default IconGas;