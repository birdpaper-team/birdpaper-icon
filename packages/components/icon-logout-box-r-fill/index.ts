import type { App } from 'vue';
import _IconLogoutBoxRFill from './icon-logout-box-r-fill.vue';

const IconLogoutBoxRFill = Object.assign(_IconLogoutBoxRFill, {
  install: (app: App) => {
    app.component(_IconLogoutBoxRFill.name, _IconLogoutBoxRFill);
  }
});

export default IconLogoutBoxRFill;