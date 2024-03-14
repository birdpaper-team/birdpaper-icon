import type { App } from 'vue';
import _IconCollapseDiagonal2Fill from './icon-collapse-diagonal-2-fill.vue';

const IconCollapseDiagonal2Fill = Object.assign(_IconCollapseDiagonal2Fill, {
  install: (app: App) => {
    app.component(_IconCollapseDiagonal2Fill.name, _IconCollapseDiagonal2Fill);
  }
});

export default IconCollapseDiagonal2Fill;