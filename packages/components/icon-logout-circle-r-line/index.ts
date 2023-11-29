import type { App } from 'vue';
import _IconLogoutCircleRLine from './icon-logout-circle-r-line.vue';

const IconLogoutCircleRLine = Object.assign(_IconLogoutCircleRLine, {
  install: (app: App) => {
    app.component(_IconLogoutCircleRLine.name, _IconLogoutCircleRLine);
  }
});

export default IconLogoutCircleRLine;