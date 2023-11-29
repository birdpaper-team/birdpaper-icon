import type { App } from 'vue';
import _IconTray from './icon-tray.vue';

const IconTray = Object.assign(_IconTray, {
  install: (app: App) => {
    app.component(_IconTray.name, _IconTray);
  }
});

export default IconTray;