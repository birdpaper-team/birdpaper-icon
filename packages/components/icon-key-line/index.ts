import type { App } from 'vue';
import _IconKeyLine from './icon-key-line.vue';

const IconKeyLine = Object.assign(_IconKeyLine, {
  install: (app: App) => {
    app.component(_IconKeyLine.name, _IconKeyLine);
  }
});

export default IconKeyLine;