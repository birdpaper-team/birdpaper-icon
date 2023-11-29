import type { App } from 'vue';
import _IconDrinksFill from './icon-drinks-fill.vue';

const IconDrinksFill = Object.assign(_IconDrinksFill, {
  install: (app: App) => {
    app.component(_IconDrinksFill.name, _IconDrinksFill);
  }
});

export default IconDrinksFill;