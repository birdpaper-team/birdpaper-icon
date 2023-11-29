import type { App } from 'vue';
import _IconUserForbidLine from './icon-user-forbid-line.vue';

const IconUserForbidLine = Object.assign(_IconUserForbidLine, {
  install: (app: App) => {
    app.component(_IconUserForbidLine.name, _IconUserForbidLine);
  }
});

export default IconUserForbidLine;