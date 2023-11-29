import type { App } from 'vue';
import _IconAdminFill from './icon-admin-fill.vue';

const IconAdminFill = Object.assign(_IconAdminFill, {
  install: (app: App) => {
    app.component(_IconAdminFill.name, _IconAdminFill);
  }
});

export default IconAdminFill;