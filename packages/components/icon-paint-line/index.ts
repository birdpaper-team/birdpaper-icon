import type { App } from 'vue';
import _IconPaintLine from './icon-paint-line.vue';

const IconPaintLine = Object.assign(_IconPaintLine, {
  install: (app: App) => {
    app.component(_IconPaintLine.name, _IconPaintLine);
  }
});

export default IconPaintLine;