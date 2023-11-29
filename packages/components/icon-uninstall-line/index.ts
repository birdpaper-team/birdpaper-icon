import type { App } from 'vue';
import _IconUninstallLine from './icon-uninstall-line.vue';

const IconUninstallLine = Object.assign(_IconUninstallLine, {
  install: (app: App) => {
    app.component(_IconUninstallLine.name, _IconUninstallLine);
  }
});

export default IconUninstallLine;