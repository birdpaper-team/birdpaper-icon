import type { App } from 'vue';
import _IconMenu4Fill from './icon-menu-4-fill.vue';

const IconMenu4Fill = Object.assign(_IconMenu4Fill, {
  install: (app: App) => {
    app.component(_IconMenu4Fill.name, _IconMenu4Fill);
  }
});

export default IconMenu4Fill;