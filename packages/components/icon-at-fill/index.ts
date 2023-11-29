import type { App } from 'vue';
import _IconAtFill from './icon-at-fill.vue';

const IconAtFill = Object.assign(_IconAtFill, {
  install: (app: App) => {
    app.component(_IconAtFill.name, _IconAtFill);
  }
});

export default IconAtFill;