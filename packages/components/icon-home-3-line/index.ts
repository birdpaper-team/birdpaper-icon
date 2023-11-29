import type { App } from 'vue';
import _IconHome3Line from './icon-home-3-line.vue';

const IconHome3Line = Object.assign(_IconHome3Line, {
  install: (app: App) => {
    app.component(_IconHome3Line.name, _IconHome3Line);
  }
});

export default IconHome3Line;