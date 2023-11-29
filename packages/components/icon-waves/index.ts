import type { App } from 'vue';
import _IconWaves from './icon-waves.vue';

const IconWaves = Object.assign(_IconWaves, {
  install: (app: App) => {
    app.component(_IconWaves.name, _IconWaves);
  }
});

export default IconWaves;