import type { App } from 'vue';
import _IconRestartLine from './icon-restart-line.vue';

const IconRestartLine = Object.assign(_IconRestartLine, {
  install: (app: App) => {
    app.component(_IconRestartLine.name, _IconRestartLine);
  }
});

export default IconRestartLine;