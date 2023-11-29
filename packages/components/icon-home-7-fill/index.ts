import type { App } from 'vue';
import _IconHome7Fill from './icon-home-7-fill.vue';

const IconHome7Fill = Object.assign(_IconHome7Fill, {
  install: (app: App) => {
    app.component(_IconHome7Fill.name, _IconHome7Fill);
  }
});

export default IconHome7Fill;