import type { App } from 'vue';
import _IconStarFill from './icon-star-fill.vue';

const IconStarFill = Object.assign(_IconStarFill, {
  install: (app: App) => {
    app.component(_IconStarFill.name, _IconStarFill);
  }
});

export default IconStarFill;