import type { App } from 'vue';
import _IconApplicationMenu from './icon-application-menu.vue';

const IconApplicationMenu = Object.assign(_IconApplicationMenu, {
  install: (app: App) => {
    app.component(_IconApplicationMenu.name, _IconApplicationMenu);
  }
});

export default IconApplicationMenu;