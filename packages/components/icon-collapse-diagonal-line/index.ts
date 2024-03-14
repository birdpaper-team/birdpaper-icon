import type { App } from 'vue';
import _IconCollapseDiagonalLine from './icon-collapse-diagonal-line.vue';

const IconCollapseDiagonalLine = Object.assign(_IconCollapseDiagonalLine, {
  install: (app: App) => {
    app.component(_IconCollapseDiagonalLine.name, _IconCollapseDiagonalLine);
  }
});

export default IconCollapseDiagonalLine;