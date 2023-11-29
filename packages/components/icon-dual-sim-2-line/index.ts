import type { App } from 'vue';
import _IconDualSim2Line from './icon-dual-sim-2-line.vue';

const IconDualSim2Line = Object.assign(_IconDualSim2Line, {
  install: (app: App) => {
    app.component(_IconDualSim2Line.name, _IconDualSim2Line);
  }
});

export default IconDualSim2Line;