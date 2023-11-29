import type { App } from 'vue';
import _IconThermosCup from './icon-thermos-cup.vue';

const IconThermosCup = Object.assign(_IconThermosCup, {
  install: (app: App) => {
    app.component(_IconThermosCup.name, _IconThermosCup);
  }
});

export default IconThermosCup;