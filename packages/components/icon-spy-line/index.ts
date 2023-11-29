import type { App } from 'vue';
import _IconSpyLine from './icon-spy-line.vue';

const IconSpyLine = Object.assign(_IconSpyLine, {
  install: (app: App) => {
    app.component(_IconSpyLine.name, _IconSpyLine);
  }
});

export default IconSpyLine;