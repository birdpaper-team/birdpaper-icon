import type { App } from 'vue';
import _IconHome8Fill from './icon-home-8-fill.vue';

const IconHome8Fill = Object.assign(_IconHome8Fill, {
  install: (app: App) => {
    app.component(_IconHome8Fill.name, _IconHome8Fill);
  }
});

export default IconHome8Fill;