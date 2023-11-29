import type { App } from 'vue';
import _IconChafingDishOne from './icon-chafing-dish-one.vue';

const IconChafingDishOne = Object.assign(_IconChafingDishOne, {
  install: (app: App) => {
    app.component(_IconChafingDishOne.name, _IconChafingDishOne);
  }
});

export default IconChafingDishOne;