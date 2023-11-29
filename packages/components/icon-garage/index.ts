import type { App } from 'vue';
import _IconGarage from './icon-garage.vue';

const IconGarage = Object.assign(_IconGarage, {
  install: (app: App) => {
    app.component(_IconGarage.name, _IconGarage);
  }
});

export default IconGarage;