import type { App } from 'vue';
import _IconLogoutBoxRLine from './icon-logout-box-r-line.vue';

const IconLogoutBoxRLine = Object.assign(_IconLogoutBoxRLine, {
  install: (app: App) => {
    app.component(_IconLogoutBoxRLine.name, _IconLogoutBoxRLine);
  }
});

export default IconLogoutBoxRLine;