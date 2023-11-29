import type { App } from 'vue';
import _IconCactusLine from './icon-cactus-line.vue';

const IconCactusLine = Object.assign(_IconCactusLine, {
  install: (app: App) => {
    app.component(_IconCactusLine.name, _IconCactusLine);
  }
});

export default IconCactusLine;