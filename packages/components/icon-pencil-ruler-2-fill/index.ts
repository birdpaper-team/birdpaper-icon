import type { App } from 'vue';
import _IconPencilRuler2Fill from './icon-pencil-ruler-2-fill.vue';

const IconPencilRuler2Fill = Object.assign(_IconPencilRuler2Fill, {
  install: (app: App) => {
    app.component(_IconPencilRuler2Fill.name, _IconPencilRuler2Fill);
  }
});

export default IconPencilRuler2Fill;