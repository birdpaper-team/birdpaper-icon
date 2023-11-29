import type { App } from 'vue';
import _IconDualSim1Fill from './icon-dual-sim-1-fill.vue';

const IconDualSim1Fill = Object.assign(_IconDualSim1Fill, {
  install: (app: App) => {
    app.component(_IconDualSim1Fill.name, _IconDualSim1Fill);
  }
});

export default IconDualSim1Fill;