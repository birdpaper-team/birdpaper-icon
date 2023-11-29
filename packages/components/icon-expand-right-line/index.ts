import type { App } from 'vue';
import _IconExpandRightLine from './icon-expand-right-line.vue';

const IconExpandRightLine = Object.assign(_IconExpandRightLine, {
  install: (app: App) => {
    app.component(_IconExpandRightLine.name, _IconExpandRightLine);
  }
});

export default IconExpandRightLine;