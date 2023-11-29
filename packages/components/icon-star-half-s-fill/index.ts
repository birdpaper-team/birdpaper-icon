import type { App } from 'vue';
import _IconStarHalfSFill from './icon-star-half-s-fill.vue';

const IconStarHalfSFill = Object.assign(_IconStarHalfSFill, {
  install: (app: App) => {
    app.component(_IconStarHalfSFill.name, _IconStarHalfSFill);
  }
});

export default IconStarHalfSFill;