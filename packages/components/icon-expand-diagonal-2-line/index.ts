import type { App } from 'vue';
import _IconExpandDiagonal2Line from './icon-expand-diagonal-2-line.vue';

const IconExpandDiagonal2Line = Object.assign(_IconExpandDiagonal2Line, {
  install: (app: App) => {
    app.component(_IconExpandDiagonal2Line.name, _IconExpandDiagonal2Line);
  }
});

export default IconExpandDiagonal2Line;