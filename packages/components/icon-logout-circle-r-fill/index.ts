import type { App } from 'vue';
import _IconLogoutCircleRFill from './icon-logout-circle-r-fill.vue';

const IconLogoutCircleRFill = Object.assign(_IconLogoutCircleRFill, {
  install: (app: App) => {
    app.component(_IconLogoutCircleRFill.name, _IconLogoutCircleRFill);
  }
});

export default IconLogoutCircleRFill;