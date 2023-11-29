import type { App } from 'vue';
import _IconDatabase2Line from './icon-database-2-line.vue';

const IconDatabase2Line = Object.assign(_IconDatabase2Line, {
  install: (app: App) => {
    app.component(_IconDatabase2Line.name, _IconDatabase2Line);
  }
});

export default IconDatabase2Line;