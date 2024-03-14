import type { App } from 'vue';
import _IconExpandDiagonal2Fill from './icon-expand-diagonal-2-fill.vue';

const IconExpandDiagonal2Fill = Object.assign(_IconExpandDiagonal2Fill, {
  install: (app: App) => {
    app.component(_IconExpandDiagonal2Fill.name, _IconExpandDiagonal2Fill);
  }
});

export default IconExpandDiagonal2Fill;