import type { App } from 'vue';
import _IconRestaurantLine from './icon-restaurant-line.vue';

const IconRestaurantLine = Object.assign(_IconRestaurantLine, {
  install: (app: App) => {
    app.component(_IconRestaurantLine.name, _IconRestaurantLine);
  }
});

export default IconRestaurantLine;