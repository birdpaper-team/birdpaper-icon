import type { App } from 'vue';
import _IconCollapseDiagonal2Line from './icon-collapse-diagonal-2-line.vue';

const IconCollapseDiagonal2Line = Object.assign(_IconCollapseDiagonal2Line, {
  install: (app: App) => {
    app.component(_IconCollapseDiagonal2Line.name, _IconCollapseDiagonal2Line);
  }
});

export default IconCollapseDiagonal2Line;