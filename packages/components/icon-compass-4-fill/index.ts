import type { App } from 'vue';
import _IconCompass4Fill from './icon-compass-4-fill.vue';

const IconCompass4Fill = Object.assign(_IconCompass4Fill, {
  install: (app: App) => {
    app.component(_IconCompass4Fill.name, _IconCompass4Fill);
  }
});

export default IconCompass4Fill;