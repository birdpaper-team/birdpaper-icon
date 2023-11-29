import type { App } from 'vue';
import _IconPencilRulerLine from './icon-pencil-ruler-line.vue';

const IconPencilRulerLine = Object.assign(_IconPencilRulerLine, {
  install: (app: App) => {
    app.component(_IconPencilRulerLine.name, _IconPencilRulerLine);
  }
});

export default IconPencilRulerLine;