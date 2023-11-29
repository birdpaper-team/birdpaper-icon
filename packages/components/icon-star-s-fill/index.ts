import type { App } from 'vue';
import _IconStarSFill from './icon-star-s-fill.vue';

const IconStarSFill = Object.assign(_IconStarSFill, {
  install: (app: App) => {
    app.component(_IconStarSFill.name, _IconStarSFill);
  }
});

export default IconStarSFill;