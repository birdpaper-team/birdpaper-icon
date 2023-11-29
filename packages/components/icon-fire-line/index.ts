import type { App } from 'vue';
import _IconFireLine from './icon-fire-line.vue';

const IconFireLine = Object.assign(_IconFireLine, {
  install: (app: App) => {
    app.component(_IconFireLine.name, _IconFireLine);
  }
});

export default IconFireLine;