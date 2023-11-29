import type { App } from 'vue';
import _IconBasketballClothes from './icon-basketball-clothes.vue';

const IconBasketballClothes = Object.assign(_IconBasketballClothes, {
  install: (app: App) => {
    app.component(_IconBasketballClothes.name, _IconBasketballClothes);
  }
});

export default IconBasketballClothes;