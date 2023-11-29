import type { App } from 'vue';
import _IconServerLine from './icon-server-line.vue';

const IconServerLine = Object.assign(_IconServerLine, {
  install: (app: App) => {
    app.component(_IconServerLine.name, _IconServerLine);
  }
});

export default IconServerLine;