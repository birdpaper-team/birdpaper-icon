import type { App } from 'vue';
import _IconRestaurant2Fill from './icon-restaurant-2-fill.vue';

const IconRestaurant2Fill = Object.assign(_IconRestaurant2Fill, {
  install: (app: App) => {
    app.component(_IconRestaurant2Fill.name, _IconRestaurant2Fill);
  }
});

export default IconRestaurant2Fill;