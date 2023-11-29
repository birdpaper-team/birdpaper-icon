import type { App } from 'vue';
import _IconHome5Fill from './icon-home-5-fill.vue';

const IconHome5Fill = Object.assign(_IconHome5Fill, {
  install: (app: App) => {
    app.component(_IconHome5Fill.name, _IconHome5Fill);
  }
});

export default IconHome5Fill;