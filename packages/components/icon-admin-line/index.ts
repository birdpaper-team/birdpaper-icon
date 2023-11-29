import type { App } from 'vue';
import _IconAdminLine from './icon-admin-line.vue';

const IconAdminLine = Object.assign(_IconAdminLine, {
  install: (app: App) => {
    app.component(_IconAdminLine.name, _IconAdminLine);
  }
});

export default IconAdminLine;