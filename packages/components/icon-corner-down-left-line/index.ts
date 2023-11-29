import type { App } from 'vue';
import _IconCornerDownLeftLine from './icon-corner-down-left-line.vue';

const IconCornerDownLeftLine = Object.assign(_IconCornerDownLeftLine, {
  install: (app: App) => {
    app.component(_IconCornerDownLeftLine.name, _IconCornerDownLeftLine);
  }
});

export default IconCornerDownLeftLine;