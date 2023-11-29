import type { App } from 'vue';
import _IconNuclearPlant from './icon-nuclear-plant.vue';

const IconNuclearPlant = Object.assign(_IconNuclearPlant, {
  install: (app: App) => {
    app.component(_IconNuclearPlant.name, _IconNuclearPlant);
  }
});

export default IconNuclearPlant;