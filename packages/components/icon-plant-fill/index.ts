import type { App } from 'vue';
import _IconPlantFill from './icon-plant-fill.vue';

const IconPlantFill = Object.assign(_IconPlantFill, {
  install: (app: App) => {
    app.component(_IconPlantFill.name, _IconPlantFill);
  }
});

export default IconPlantFill;