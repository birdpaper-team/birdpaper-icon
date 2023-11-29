import type { App } from 'vue';
import _IconPencilRulerFill from './icon-pencil-ruler-fill.vue';

const IconPencilRulerFill = Object.assign(_IconPencilRulerFill, {
  install: (app: App) => {
    app.component(_IconPencilRulerFill.name, _IconPencilRulerFill);
  }
});

export default IconPencilRulerFill;