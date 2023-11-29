import type { App } from 'vue';
import _IconNumbersFill from './icon-numbers-fill.vue';

const IconNumbersFill = Object.assign(_IconNumbersFill, {
  install: (app: App) => {
    app.component(_IconNumbersFill.name, _IconNumbersFill);
  }
});

export default IconNumbersFill;