import type { App } from 'vue';
import _IconShoppingCartOne from './icon-shopping-cart-one.vue';

const IconShoppingCartOne = Object.assign(_IconShoppingCartOne, {
  install: (app: App) => {
    app.component(_IconShoppingCartOne.name, _IconShoppingCartOne);
  }
});

export default IconShoppingCartOne;