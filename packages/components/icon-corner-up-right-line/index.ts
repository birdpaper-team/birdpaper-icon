import type { App } from 'vue';
import _IconCornerUpRightLine from './icon-corner-up-right-line.vue';

const IconCornerUpRightLine = Object.assign(_IconCornerUpRightLine, {
  install: (app: App) => {
    app.component(_IconCornerUpRightLine.name, _IconCornerUpRightLine);
  }
});

export default IconCornerUpRightLine;