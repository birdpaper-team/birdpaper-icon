import type { App } from 'vue';
import _IconFileCodeLine from './icon-file-code-line.vue';

const IconFileCodeLine = Object.assign(_IconFileCodeLine, {
  install: (app: App) => {
    app.component(_IconFileCodeLine.name, _IconFileCodeLine);
  }
});

export default IconFileCodeLine;