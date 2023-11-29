import type { App } from 'vue';
import _IconXboxLine from './icon-xbox-line.vue';

const IconXboxLine = Object.assign(_IconXboxLine, {
  install: (app: App) => {
    app.component(_IconXboxLine.name, _IconXboxLine);
  }
});

export default IconXboxLine;