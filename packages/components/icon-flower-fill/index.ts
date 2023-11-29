import type { App } from 'vue';
import _IconFlowerFill from './icon-flower-fill.vue';

const IconFlowerFill = Object.assign(_IconFlowerFill, {
  install: (app: App) => {
    app.component(_IconFlowerFill.name, _IconFlowerFill);
  }
});

export default IconFlowerFill;