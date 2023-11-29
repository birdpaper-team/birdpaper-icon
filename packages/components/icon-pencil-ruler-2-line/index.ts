import type { App } from 'vue';
import _IconPencilRuler2Line from './icon-pencil-ruler-2-line.vue';

const IconPencilRuler2Line = Object.assign(_IconPencilRuler2Line, {
  install: (app: App) => {
    app.component(_IconPencilRuler2Line.name, _IconPencilRuler2Line);
  }
});

export default IconPencilRuler2Line;