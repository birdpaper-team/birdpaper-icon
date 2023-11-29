import type { App } from 'vue';
import _IconCycle from './icon-cycle.vue';

const IconCycle = Object.assign(_IconCycle, {
  install: (app: App) => {
    app.component(_IconCycle.name, _IconCycle);
  }
});

export default IconCycle;