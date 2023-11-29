import type { App } from 'vue';
import _IconHome5Line from './icon-home-5-line.vue';

const IconHome5Line = Object.assign(_IconHome5Line, {
  install: (app: App) => {
    app.component(_IconHome5Line.name, _IconHome5Line);
  }
});

export default IconHome5Line;