import type { App } from 'vue';
import _IconCodeLine from './icon-code-line.vue';

const IconCodeLine = Object.assign(_IconCodeLine, {
  install: (app: App) => {
    app.component(_IconCodeLine.name, _IconCodeLine);
  }
});

export default IconCodeLine;