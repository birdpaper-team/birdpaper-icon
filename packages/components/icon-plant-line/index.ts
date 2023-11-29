import type { App } from 'vue';
import _IconPlantLine from './icon-plant-line.vue';

const IconPlantLine = Object.assign(_IconPlantLine, {
  install: (app: App) => {
    app.component(_IconPlantLine.name, _IconPlantLine);
  }
});

export default IconPlantLine;