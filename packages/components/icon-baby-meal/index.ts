import type { App } from 'vue';
import _IconBabyMeal from './icon-baby-meal.vue';

const IconBabyMeal = Object.assign(_IconBabyMeal, {
  install: (app: App) => {
    app.component(_IconBabyMeal.name, _IconBabyMeal);
  }
});

export default IconBabyMeal;