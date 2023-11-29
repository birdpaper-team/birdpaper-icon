import type { App } from 'vue';
import _IconShoppingCart2Line from './icon-shopping-cart-2-line.vue';

const IconShoppingCart2Line = Object.assign(_IconShoppingCart2Line, {
  install: (app: App) => {
    app.component(_IconShoppingCart2Line.name, _IconShoppingCart2Line);
  }
});

export default IconShoppingCart2Line;