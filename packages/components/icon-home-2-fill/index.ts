import type { App } from 'vue';
import _IconHome2Fill from './icon-home-2-fill.vue';

const IconHome2Fill = Object.assign(_IconHome2Fill, {
  install: (app: App) => {
    app.component(_IconHome2Fill.name, _IconHome2Fill);
  }
});

export default IconHome2Fill;