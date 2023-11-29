import type { App } from 'vue';
import _IconMailForbidLine from './icon-mail-forbid-line.vue';

const IconMailForbidLine = Object.assign(_IconMailForbidLine, {
  install: (app: App) => {
    app.component(_IconMailForbidLine.name, _IconMailForbidLine);
  }
});

export default IconMailForbidLine;