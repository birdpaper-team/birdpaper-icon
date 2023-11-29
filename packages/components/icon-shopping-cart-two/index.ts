import type { App } from 'vue';
import _IconShoppingCartTwo from './icon-shopping-cart-two.vue';

const IconShoppingCartTwo = Object.assign(_IconShoppingCartTwo, {
  install: (app: App) => {
    app.component(_IconShoppingCartTwo.name, _IconShoppingCartTwo);
  }
});

export default IconShoppingCartTwo;