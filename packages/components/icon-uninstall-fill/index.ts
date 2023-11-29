import type { App } from 'vue';
import _IconUninstallFill from './icon-uninstall-fill.vue';

const IconUninstallFill = Object.assign(_IconUninstallFill, {
  install: (app: App) => {
    app.component(_IconUninstallFill.name, _IconUninstallFill);
  }
});

export default IconUninstallFill;