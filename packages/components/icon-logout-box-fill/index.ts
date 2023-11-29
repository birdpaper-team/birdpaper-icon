import type { App } from 'vue';
import _IconLogoutBoxFill from './icon-logout-box-fill.vue';

const IconLogoutBoxFill = Object.assign(_IconLogoutBoxFill, {
  install: (app: App) => {
    app.component(_IconLogoutBoxFill.name, _IconLogoutBoxFill);
  }
});

export default IconLogoutBoxFill;