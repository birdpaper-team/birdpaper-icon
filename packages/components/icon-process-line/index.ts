import type { App } from 'vue';
import _IconProcessLine from './icon-process-line.vue';

const IconProcessLine = Object.assign(_IconProcessLine, {
  install: (app: App) => {
    app.component(_IconProcessLine.name, _IconProcessLine);
  }
});

export default IconProcessLine;