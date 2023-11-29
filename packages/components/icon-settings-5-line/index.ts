import type { App } from 'vue';
import _IconSettings5Line from './icon-settings-5-line.vue';

const IconSettings5Line = Object.assign(_IconSettings5Line, {
  install: (app: App) => {
    app.component(_IconSettings5Line.name, _IconSettings5Line);
  }
});

export default IconSettings5Line;