import type { App } from 'vue';
import _IconSettings3Line from './icon-settings-3-line.vue';

const IconSettings3Line = Object.assign(_IconSettings3Line, {
  install: (app: App) => {
    app.component(_IconSettings3Line.name, _IconSettings3Line);
  }
});

export default IconSettings3Line;