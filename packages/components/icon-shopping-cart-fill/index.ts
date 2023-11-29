import type { App } from 'vue';
import _IconShoppingCartFill from './icon-shopping-cart-fill.vue';

const IconShoppingCartFill = Object.assign(_IconShoppingCartFill, {
  install: (app: App) => {
    app.component(_IconShoppingCartFill.name, _IconShoppingCartFill);
  }
});

export default IconShoppingCartFill;