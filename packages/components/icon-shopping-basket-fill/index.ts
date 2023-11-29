import type { App } from 'vue';
import _IconShoppingBasketFill from './icon-shopping-basket-fill.vue';

const IconShoppingBasketFill = Object.assign(_IconShoppingBasketFill, {
  install: (app: App) => {
    app.component(_IconShoppingBasketFill.name, _IconShoppingBasketFill);
  }
});

export default IconShoppingBasketFill;