import type { App } from 'vue';
import _IconCompass2Fill from './icon-compass-2-fill.vue';

const IconCompass2Fill = Object.assign(_IconCompass2Fill, {
  install: (app: App) => {
    app.component(_IconCompass2Fill.name, _IconCompass2Fill);
  }
});

export default IconCompass2Fill;