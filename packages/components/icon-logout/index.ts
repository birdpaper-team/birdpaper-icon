import type { App } from 'vue';
import _IconLogout from './icon-logout.vue';

const IconLogout = Object.assign(_IconLogout, {
  install: (app: App) => {
    app.component(_IconLogout.name, _IconLogout);
  }
});

export default IconLogout;