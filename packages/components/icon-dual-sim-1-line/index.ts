import type { App } from 'vue';
import _IconDualSim1Line from './icon-dual-sim-1-line.vue';

const IconDualSim1Line = Object.assign(_IconDualSim1Line, {
  install: (app: App) => {
    app.component(_IconDualSim1Line.name, _IconDualSim1Line);
  }
});

export default IconDualSim1Line;