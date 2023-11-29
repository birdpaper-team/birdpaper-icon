import type { App } from 'vue';
import _IconStarHalfFill from './icon-star-half-fill.vue';

const IconStarHalfFill = Object.assign(_IconStarHalfFill, {
  install: (app: App) => {
    app.component(_IconStarHalfFill.name, _IconStarHalfFill);
  }
});

export default IconStarHalfFill;