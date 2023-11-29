import type { App } from 'vue';
import _IconGridLine from './icon-grid-line.vue';

const IconGridLine = Object.assign(_IconGridLine, {
  install: (app: App) => {
    app.component(_IconGridLine.name, _IconGridLine);
  }
});

export default IconGridLine;