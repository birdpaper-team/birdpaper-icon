import type { App } from 'vue';
import _IconFitness from './icon-fitness.vue';

const IconFitness = Object.assign(_IconFitness, {
  install: (app: App) => {
    app.component(_IconFitness.name, _IconFitness);
  }
});

export default IconFitness;