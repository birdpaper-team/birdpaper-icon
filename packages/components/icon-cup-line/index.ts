import type { App } from 'vue';
import _IconCupLine from './icon-cup-line.vue';

const IconCupLine = Object.assign(_IconCupLine, {
  install: (app: App) => {
    app.component(_IconCupLine.name, _IconCupLine);
  }
});

export default IconCupLine;