import type { App } from 'vue';
import _IconRuler2Fill from './icon-ruler-2-fill.vue';

const IconRuler2Fill = Object.assign(_IconRuler2Fill, {
  install: (app: App) => {
    app.component(_IconRuler2Fill.name, _IconRuler2Fill);
  }
});

export default IconRuler2Fill;