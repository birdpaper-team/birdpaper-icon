import type { App } from 'vue';
import _IconCityGate from './icon-city-gate.vue';

const IconCityGate = Object.assign(_IconCityGate, {
  install: (app: App) => {
    app.component(_IconCityGate.name, _IconCityGate);
  }
});

export default IconCityGate;