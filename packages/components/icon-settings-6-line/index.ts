import type { App } from 'vue';
import _IconSettings6Line from './icon-settings-6-line.vue';

const IconSettings6Line = Object.assign(_IconSettings6Line, {
  install: (app: App) => {
    app.component(_IconSettings6Line.name, _IconSettings6Line);
  }
});

export default IconSettings6Line;