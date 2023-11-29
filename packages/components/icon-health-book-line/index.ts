import type { App } from 'vue';
import _IconHealthBookLine from './icon-health-book-line.vue';

const IconHealthBookLine = Object.assign(_IconHealthBookLine, {
  install: (app: App) => {
    app.component(_IconHealthBookLine.name, _IconHealthBookLine);
  }
});

export default IconHealthBookLine;