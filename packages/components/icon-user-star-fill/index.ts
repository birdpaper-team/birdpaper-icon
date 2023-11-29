import type { App } from 'vue';
import _IconUserStarFill from './icon-user-star-fill.vue';

const IconUserStarFill = Object.assign(_IconUserStarFill, {
  install: (app: App) => {
    app.component(_IconUserStarFill.name, _IconUserStarFill);
  }
});

export default IconUserStarFill;