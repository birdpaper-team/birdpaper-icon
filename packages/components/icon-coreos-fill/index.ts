import type { App } from 'vue';
import _IconCoreosFill from './icon-coreos-fill.vue';

const IconCoreosFill = Object.assign(_IconCoreosFill, {
  install: (app: App) => {
    app.component(_IconCoreosFill.name, _IconCoreosFill);
  }
});

export default IconCoreosFill;