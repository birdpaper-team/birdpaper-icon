import type { App } from 'vue';
import _IconInstallFill from './icon-install-fill.vue';

const IconInstallFill = Object.assign(_IconInstallFill, {
  install: (app: App) => {
    app.component(_IconInstallFill.name, _IconInstallFill);
  }
});

export default IconInstallFill;