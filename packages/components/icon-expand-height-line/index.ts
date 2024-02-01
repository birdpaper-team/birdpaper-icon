import type { App } from 'vue';
import _IconExpandHeightLine from './icon-expand-height-line.vue';

const IconExpandHeightLine = Object.assign(_IconExpandHeightLine, {
  install: (app: App) => {
    app.component(_IconExpandHeightLine.name, _IconExpandHeightLine);
  }
});

export default IconExpandHeightLine;