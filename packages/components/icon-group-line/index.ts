import type { App } from 'vue';
import _IconGroupLine from './icon-group-line.vue';

const IconGroupLine = Object.assign(_IconGroupLine, {
  install: (app: App) => {
    app.component(_IconGroupLine.name, _IconGroupLine);
  }
});

export default IconGroupLine;