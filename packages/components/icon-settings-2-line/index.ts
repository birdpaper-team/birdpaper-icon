import type { App } from 'vue';
import _IconSettings2Line from './icon-settings-2-line.vue';

const IconSettings2Line = Object.assign(_IconSettings2Line, {
  install: (app: App) => {
    app.component(_IconSettings2Line.name, _IconSettings2Line);
  }
});

export default IconSettings2Line;