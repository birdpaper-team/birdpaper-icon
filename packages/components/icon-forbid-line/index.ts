import type { App } from 'vue';
import _IconForbidLine from './icon-forbid-line.vue';

const IconForbidLine = Object.assign(_IconForbidLine, {
  install: (app: App) => {
    app.component(_IconForbidLine.name, _IconForbidLine);
  }
});

export default IconForbidLine;