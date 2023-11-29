import type { App } from 'vue';
import _IconMailStarFill from './icon-mail-star-fill.vue';

const IconMailStarFill = Object.assign(_IconMailStarFill, {
  install: (app: App) => {
    app.component(_IconMailStarFill.name, _IconMailStarFill);
  }
});

export default IconMailStarFill;