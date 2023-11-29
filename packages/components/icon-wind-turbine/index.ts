import type { App } from 'vue';
import _IconWindTurbine from './icon-wind-turbine.vue';

const IconWindTurbine = Object.assign(_IconWindTurbine, {
  install: (app: App) => {
    app.component(_IconWindTurbine.name, _IconWindTurbine);
  }
});

export default IconWindTurbine;