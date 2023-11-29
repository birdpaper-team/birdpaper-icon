import type { App } from 'vue';
import _IconElectricIron from './icon-electric-iron.vue';

const IconElectricIron = Object.assign(_IconElectricIron, {
  install: (app: App) => {
    app.component(_IconElectricIron.name, _IconElectricIron);
  }
});

export default IconElectricIron;