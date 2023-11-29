import type { App } from 'vue';
import _IconOvenTray from './icon-oven-tray.vue';

const IconOvenTray = Object.assign(_IconOvenTray, {
  install: (app: App) => {
    app.component(_IconOvenTray.name, _IconOvenTray);
  }
});

export default IconOvenTray;