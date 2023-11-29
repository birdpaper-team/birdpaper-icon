import type { App } from 'vue';
import _IconExperiment from './icon-experiment.vue';

const IconExperiment = Object.assign(_IconExperiment, {
  install: (app: App) => {
    app.component(_IconExperiment.name, _IconExperiment);
  }
});

export default IconExperiment;