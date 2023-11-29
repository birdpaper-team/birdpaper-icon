import type { App } from 'vue';
import _IconShoppingBasket2Fill from './icon-shopping-basket-2-fill.vue';

const IconShoppingBasket2Fill = Object.assign(_IconShoppingBasket2Fill, {
  install: (app: App) => {
    app.component(_IconShoppingBasket2Fill.name, _IconShoppingBasket2Fill);
  }
});

export default IconShoppingBasket2Fill;