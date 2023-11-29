import type { App } from 'vue';
import _IconHome8Line from './icon-home-8-line.vue';

const IconHome8Line = Object.assign(_IconHome8Line, {
  install: (app: App) => {
    app.component(_IconHome8Line.name, _IconHome8Line);
  }
});

export default IconHome8Line;