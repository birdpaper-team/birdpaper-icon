import type { App } from 'vue';
import _IconDvFill from './icon-dv-fill.vue';

const IconDvFill = Object.assign(_IconDvFill, {
  install: (app: App) => {
    app.component(_IconDvFill.name, _IconDvFill);
  }
});

export default IconDvFill;