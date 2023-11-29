import type { App } from 'vue';
import _IconHome6Line from './icon-home-6-line.vue';

const IconHome6Line = Object.assign(_IconHome6Line, {
  install: (app: App) => {
    app.component(_IconHome6Line.name, _IconHome6Line);
  }
});

export default IconHome6Line;