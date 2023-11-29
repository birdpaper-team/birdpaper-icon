import type { App } from 'vue';
import _IconInstall from './icon-install.vue';

const IconInstall = Object.assign(_IconInstall, {
  install: (app: App) => {
    app.component(_IconInstall.name, _IconInstall);
  }
});

export default IconInstall;