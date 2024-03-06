import type { App } from 'vue';
import _IconAedLine from './icon-aed-line.vue';

const IconAedLine = Object.assign(_IconAedLine, {
  install: (app: App) => {
    app.component(_IconAedLine.name, _IconAedLine);
  }
});

export default IconAedLine;