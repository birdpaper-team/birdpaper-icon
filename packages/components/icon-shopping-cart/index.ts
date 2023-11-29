import type { App } from 'vue';
import _IconShoppingCart from './icon-shopping-cart.vue';

const IconShoppingCart = Object.assign(_IconShoppingCart, {
  install: (app: App) => {
    app.component(_IconShoppingCart.name, _IconShoppingCart);
  }
});

export default IconShoppingCart;