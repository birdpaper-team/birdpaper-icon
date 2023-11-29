import type { App } from 'vue';
import _IconFileWordLine from './icon-file-word-line.vue';

const IconFileWordLine = Object.assign(_IconFileWordLine, {
  install: (app: App) => {
    app.component(_IconFileWordLine.name, _IconFileWordLine);
  }
});

export default IconFileWordLine;