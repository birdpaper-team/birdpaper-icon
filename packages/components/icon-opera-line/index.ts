import type { App } from 'vue';
import _IconOperaLine from './icon-opera-line.vue';

const IconOperaLine = Object.assign(_IconOperaLine, {
  install: (app: App) => {
    app.component(_IconOperaLine.name, _IconOperaLine);
  }
});

export default IconOperaLine;