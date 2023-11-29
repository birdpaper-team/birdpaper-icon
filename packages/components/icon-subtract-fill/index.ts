import type { App } from 'vue';
import _IconSubtractFill from './icon-subtract-fill.vue';

const IconSubtractFill = Object.assign(_IconSubtractFill, {
  install: (app: App) => {
    app.component(_IconSubtractFill.name, _IconSubtractFill);
  }
});

export default IconSubtractFill;