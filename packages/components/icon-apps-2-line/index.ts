import type { App } from 'vue';
import _IconApps2Line from './icon-apps-2-line.vue';

const IconApps2Line = Object.assign(_IconApps2Line, {
  install: (app: App) => {
    app.component(_IconApps2Line.name, _IconApps2Line);
  }
});

export default IconApps2Line;