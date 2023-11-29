import type { App } from 'vue';
import _IconDualSim2Fill from './icon-dual-sim-2-fill.vue';

const IconDualSim2Fill = Object.assign(_IconDualSim2Fill, {
  install: (app: App) => {
    app.component(_IconDualSim2Fill.name, _IconDualSim2Fill);
  }
});

export default IconDualSim2Fill;