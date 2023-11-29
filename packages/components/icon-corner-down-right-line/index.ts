import type { App } from 'vue';
import _IconCornerDownRightLine from './icon-corner-down-right-line.vue';

const IconCornerDownRightLine = Object.assign(_IconCornerDownRightLine, {
  install: (app: App) => {
    app.component(_IconCornerDownRightLine.name, _IconCornerDownRightLine);
  }
});

export default IconCornerDownRightLine;