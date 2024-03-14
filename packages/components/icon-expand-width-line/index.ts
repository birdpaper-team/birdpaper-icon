import type { App } from 'vue';
import _IconExpandWidthLine from './icon-expand-width-line.vue';

const IconExpandWidthLine = Object.assign(_IconExpandWidthLine, {
  install: (app: App) => {
    app.component(_IconExpandWidthLine.name, _IconExpandWidthLine);
  }
});

export default IconExpandWidthLine;