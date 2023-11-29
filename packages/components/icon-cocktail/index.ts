import type { App } from 'vue';
import _IconCocktail from './icon-cocktail.vue';

const IconCocktail = Object.assign(_IconCocktail, {
  install: (app: App) => {
    app.component(_IconCocktail.name, _IconCocktail);
  }
});

export default IconCocktail;