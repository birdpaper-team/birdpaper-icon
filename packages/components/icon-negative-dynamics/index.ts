import type { App } from 'vue';
import _IconNegativeDynamics from './icon-negative-dynamics.vue';

const IconNegativeDynamics = Object.assign(_IconNegativeDynamics, {
  install: (app: App) => {
    app.component(_IconNegativeDynamics.name, _IconNegativeDynamics);
  }
});

export default IconNegativeDynamics;