import type { App } from 'vue';
import _IconExpandDiagonalLine from './icon-expand-diagonal-line.vue';

const IconExpandDiagonalLine = Object.assign(_IconExpandDiagonalLine, {
  install: (app: App) => {
    app.component(_IconExpandDiagonalLine.name, _IconExpandDiagonalLine);
  }
});

export default IconExpandDiagonalLine;