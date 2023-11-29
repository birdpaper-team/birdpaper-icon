import type { App } from 'vue';
import _IconCrossLine from './icon-cross-line.vue';

const IconCrossLine = Object.assign(_IconCrossLine, {
  install: (app: App) => {
    app.component(_IconCrossLine.name, _IconCrossLine);
  }
});

export default IconCrossLine;