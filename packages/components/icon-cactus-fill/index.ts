import type { App } from 'vue';
import _IconCactusFill from './icon-cactus-fill.vue';

const IconCactusFill = Object.assign(_IconCactusFill, {
  install: (app: App) => {
    app.component(_IconCactusFill.name, _IconCactusFill);
  }
});

export default IconCactusFill;