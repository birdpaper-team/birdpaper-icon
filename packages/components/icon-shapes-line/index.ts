import type { App } from 'vue';
import _IconShapesLine from './icon-shapes-line.vue';

const IconShapesLine = Object.assign(_IconShapesLine, {
  install: (app: App) => {
    app.component(_IconShapesLine.name, _IconShapesLine);
  }
});

export default IconShapesLine;