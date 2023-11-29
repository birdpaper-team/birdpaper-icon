import type { App } from 'vue';
import _IconStoreFill from './icon-store-fill.vue';

const IconStoreFill = Object.assign(_IconStoreFill, {
  install: (app: App) => {
    app.component(_IconStoreFill.name, _IconStoreFill);
  }
});

export default IconStoreFill;