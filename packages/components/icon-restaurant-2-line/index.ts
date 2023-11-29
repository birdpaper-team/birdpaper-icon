import type { App } from 'vue';
import _IconRestaurant2Line from './icon-restaurant-2-line.vue';

const IconRestaurant2Line = Object.assign(_IconRestaurant2Line, {
  install: (app: App) => {
    app.component(_IconRestaurant2Line.name, _IconRestaurant2Line);
  }
});

export default IconRestaurant2Line;