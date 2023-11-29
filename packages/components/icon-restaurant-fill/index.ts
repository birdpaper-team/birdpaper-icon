import type { App } from 'vue';
import _IconRestaurantFill from './icon-restaurant-fill.vue';

const IconRestaurantFill = Object.assign(_IconRestaurantFill, {
  install: (app: App) => {
    app.component(_IconRestaurantFill.name, _IconRestaurantFill);
  }
});

export default IconRestaurantFill;