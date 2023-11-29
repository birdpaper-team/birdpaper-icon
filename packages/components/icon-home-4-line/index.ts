import type { App } from 'vue';
import _IconHome4Line from './icon-home-4-line.vue';

const IconHome4Line = Object.assign(_IconHome4Line, {
  install: (app: App) => {
    app.component(_IconHome4Line.name, _IconHome4Line);
  }
});

export default IconHome4Line;