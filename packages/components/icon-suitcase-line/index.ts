import type { App } from 'vue';
import _IconSuitcaseLine from './icon-suitcase-line.vue';

const IconSuitcaseLine = Object.assign(_IconSuitcaseLine, {
  install: (app: App) => {
    app.component(_IconSuitcaseLine.name, _IconSuitcaseLine);
  }
});

export default IconSuitcaseLine;