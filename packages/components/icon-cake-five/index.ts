import type { App } from 'vue';
import _IconCakeFive from './icon-cake-five.vue';

const IconCakeFive = Object.assign(_IconCakeFive, {
  install: (app: App) => {
    app.component(_IconCakeFive.name, _IconCakeFive);
  }
});

export default IconCakeFive;