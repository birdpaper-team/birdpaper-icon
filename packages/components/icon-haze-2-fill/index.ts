import type { App } from 'vue';
import _IconHaze2Fill from './icon-haze-2-fill.vue';

const IconHaze2Fill = Object.assign(_IconHaze2Fill, {
  install: (app: App) => {
    app.component(_IconHaze2Fill.name, _IconHaze2Fill);
  }
});

export default IconHaze2Fill;