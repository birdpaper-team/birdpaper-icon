import type { App } from 'vue';
import _IconGroup3Line from './icon-group-3-line.vue';

const IconGroup3Line = Object.assign(_IconGroup3Line, {
  install: (app: App) => {
    app.component(_IconGroup3Line.name, _IconGroup3Line);
  }
});

export default IconGroup3Line;