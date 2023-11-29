import type { App } from 'vue';
import _IconCakeFour from './icon-cake-four.vue';

const IconCakeFour = Object.assign(_IconCakeFour, {
  install: (app: App) => {
    app.component(_IconCakeFour.name, _IconCakeFour);
  }
});

export default IconCakeFour;