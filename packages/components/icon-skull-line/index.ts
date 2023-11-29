import type { App } from 'vue';
import _IconSkullLine from './icon-skull-line.vue';

const IconSkullLine = Object.assign(_IconSkullLine, {
  install: (app: App) => {
    app.component(_IconSkullLine.name, _IconSkullLine);
  }
});

export default IconSkullLine;