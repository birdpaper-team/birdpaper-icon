import type { App } from 'vue';
import _IconHome2Line from './icon-home-2-line.vue';

const IconHome2Line = Object.assign(_IconHome2Line, {
  install: (app: App) => {
    app.component(_IconHome2Line.name, _IconHome2Line);
  }
});

export default IconHome2Line;