import type { App } from 'vue';
import _IconCastLine from './icon-cast-line.vue';

const IconCastLine = Object.assign(_IconCastLine, {
  install: (app: App) => {
    app.component(_IconCastLine.name, _IconCastLine);
  }
});

export default IconCastLine;