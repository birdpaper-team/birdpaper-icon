import type { App } from 'vue';
import _IconCompass3Fill from './icon-compass-3-fill.vue';

const IconCompass3Fill = Object.assign(_IconCompass3Fill, {
  install: (app: App) => {
    app.component(_IconCompass3Fill.name, _IconCompass3Fill);
  }
});

export default IconCompass3Fill;