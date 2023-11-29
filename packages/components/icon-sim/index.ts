import type { App } from 'vue';
import _IconSim from './icon-sim.vue';

const IconSim = Object.assign(_IconSim, {
  install: (app: App) => {
    app.component(_IconSim.name, _IconSim);
  }
});

export default IconSim;