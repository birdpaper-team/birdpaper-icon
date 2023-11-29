import type { App } from 'vue';
import _IconProjectorLine from './icon-projector-line.vue';

const IconProjectorLine = Object.assign(_IconProjectorLine, {
  install: (app: App) => {
    app.component(_IconProjectorLine.name, _IconProjectorLine);
  }
});

export default IconProjectorLine;