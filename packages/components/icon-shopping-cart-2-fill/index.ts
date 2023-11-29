import type { App } from 'vue';
import _IconShoppingCart2Fill from './icon-shopping-cart-2-fill.vue';

const IconShoppingCart2Fill = Object.assign(_IconShoppingCart2Fill, {
  install: (app: App) => {
    app.component(_IconShoppingCart2Fill.name, _IconShoppingCart2Fill);
  }
});

export default IconShoppingCart2Fill;