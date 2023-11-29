import type { App } from 'vue';
import _IconCakeFill from './icon-cake-fill.vue';

const IconCakeFill = Object.assign(_IconCakeFill, {
  install: (app: App) => {
    app.component(_IconCakeFill.name, _IconCakeFill);
  }
});

export default IconCakeFill;