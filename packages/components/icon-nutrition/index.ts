import type { App } from 'vue';
import _IconNutrition from './icon-nutrition.vue';

const IconNutrition = Object.assign(_IconNutrition, {
  install: (app: App) => {
    app.component(_IconNutrition.name, _IconNutrition);
  }
});

export default IconNutrition;