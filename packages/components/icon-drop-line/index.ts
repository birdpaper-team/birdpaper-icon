import type { App } from 'vue';
import _IconDropLine from './icon-drop-line.vue';

const IconDropLine = Object.assign(_IconDropLine, {
  install: (app: App) => {
    app.component(_IconDropLine.name, _IconDropLine);
  }
});

export default IconDropLine;