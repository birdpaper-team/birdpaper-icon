import type { App } from 'vue';
import _IconJewelry from './icon-jewelry.vue';

const IconJewelry = Object.assign(_IconJewelry, {
  install: (app: App) => {
    app.component(_IconJewelry.name, _IconJewelry);
  }
});

export default IconJewelry;