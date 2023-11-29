import type { App } from 'vue';
import _IconShoppingCartDel from './icon-shopping-cart-del.vue';

const IconShoppingCartDel = Object.assign(_IconShoppingCartDel, {
  install: (app: App) => {
    app.component(_IconShoppingCartDel.name, _IconShoppingCartDel);
  }
});

export default IconShoppingCartDel;