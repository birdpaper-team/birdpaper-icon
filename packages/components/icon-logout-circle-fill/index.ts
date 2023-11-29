import type { App } from 'vue';
import _IconLogoutCircleFill from './icon-logout-circle-fill.vue';

const IconLogoutCircleFill = Object.assign(_IconLogoutCircleFill, {
  install: (app: App) => {
    app.component(_IconLogoutCircleFill.name, _IconLogoutCircleFill);
  }
});

export default IconLogoutCircleFill;