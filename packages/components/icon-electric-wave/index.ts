import type { App } from 'vue';
import _IconElectricWave from './icon-electric-wave.vue';

const IconElectricWave = Object.assign(_IconElectricWave, {
  install: (app: App) => {
    app.component(_IconElectricWave.name, _IconElectricWave);
  }
});

export default IconElectricWave;