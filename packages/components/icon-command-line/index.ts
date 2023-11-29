import type { App } from 'vue';
import _IconCommandLine from './icon-command-line.vue';

const IconCommandLine = Object.assign(_IconCommandLine, {
  install: (app: App) => {
    app.component(_IconCommandLine.name, _IconCommandLine);
  }
});

export default IconCommandLine;