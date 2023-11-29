import type { App } from 'vue';
import _IconHome6Fill from './icon-home-6-fill.vue';

const IconHome6Fill = Object.assign(_IconHome6Fill, {
  install: (app: App) => {
    app.component(_IconHome6Fill.name, _IconHome6Fill);
  }
});

export default IconHome6Fill;