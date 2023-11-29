import type { App } from 'vue';
import _IconExpandLeftRightLine from './icon-expand-left-right-line.vue';

const IconExpandLeftRightLine = Object.assign(_IconExpandLeftRightLine, {
  install: (app: App) => {
    app.component(_IconExpandLeftRightLine.name, _IconExpandLeftRightLine);
  }
});

export default IconExpandLeftRightLine;