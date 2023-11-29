import type { App } from 'vue';
import _IconCornerRightDownLine from './icon-corner-right-down-line.vue';

const IconCornerRightDownLine = Object.assign(_IconCornerRightDownLine, {
  install: (app: App) => {
    app.component(_IconCornerRightDownLine.name, _IconCornerRightDownLine);
  }
});

export default IconCornerRightDownLine;