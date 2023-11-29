import type { App } from 'vue';
import _IconDvLine from './icon-dv-line.vue';

const IconDvLine = Object.assign(_IconDvLine, {
  install: (app: App) => {
    app.component(_IconDvLine.name, _IconDvLine);
  }
});

export default IconDvLine;