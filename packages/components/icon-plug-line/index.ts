import type { App } from 'vue';
import _IconPlugLine from './icon-plug-line.vue';

const IconPlugLine = Object.assign(_IconPlugLine, {
  install: (app: App) => {
    app.component(_IconPlugLine.name, _IconPlugLine);
  }
});

export default IconPlugLine;