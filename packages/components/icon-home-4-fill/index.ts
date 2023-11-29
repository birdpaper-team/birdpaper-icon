import type { App } from 'vue';
import _IconHome4Fill from './icon-home-4-fill.vue';

const IconHome4Fill = Object.assign(_IconHome4Fill, {
  install: (app: App) => {
    app.component(_IconHome4Fill.name, _IconHome4Fill);
  }
});

export default IconHome4Fill;