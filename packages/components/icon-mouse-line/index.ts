import type { App } from 'vue';
import _IconMouseLine from './icon-mouse-line.vue';

const IconMouseLine = Object.assign(_IconMouseLine, {
  install: (app: App) => {
    app.component(_IconMouseLine.name, _IconMouseLine);
  }
});

export default IconMouseLine;