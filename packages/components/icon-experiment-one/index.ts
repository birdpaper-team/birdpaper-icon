import type { App } from 'vue';
import _IconExperimentOne from './icon-experiment-one.vue';

const IconExperimentOne = Object.assign(_IconExperimentOne, {
  install: (app: App) => {
    app.component(_IconExperimentOne.name, _IconExperimentOne);
  }
});

export default IconExperimentOne;