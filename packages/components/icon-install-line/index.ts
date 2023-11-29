import type { App } from 'vue';
import _IconInstallLine from './icon-install-line.vue';

const IconInstallLine = Object.assign(_IconInstallLine, {
  install: (app: App) => {
    app.component(_IconInstallLine.name, _IconInstallLine);
  }
});

export default IconInstallLine;