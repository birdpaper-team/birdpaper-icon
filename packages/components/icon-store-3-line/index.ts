import type { App } from 'vue';
import _IconStore3Line from './icon-store-3-line.vue';

const IconStore3Line = Object.assign(_IconStore3Line, {
  install: (app: App) => {
    app.component(_IconStore3Line.name, _IconStore3Line);
  }
});

export default IconStore3Line;