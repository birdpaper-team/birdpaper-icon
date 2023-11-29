import type { App } from 'vue';
import _IconHome7Line from './icon-home-7-line.vue';

const IconHome7Line = Object.assign(_IconHome7Line, {
  install: (app: App) => {
    app.component(_IconHome7Line.name, _IconHome7Line);
  }
});

export default IconHome7Line;