import type { App } from 'vue';
import _IconExpandLeftLine from './icon-expand-left-line.vue';

const IconExpandLeftLine = Object.assign(_IconExpandLeftLine, {
  install: (app: App) => {
    app.component(_IconExpandLeftLine.name, _IconExpandLeftLine);
  }
});

export default IconExpandLeftLine;