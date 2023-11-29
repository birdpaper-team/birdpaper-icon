import type { App } from 'vue';
import _IconShoppingBasket2Line from './icon-shopping-basket-2-line.vue';

const IconShoppingBasket2Line = Object.assign(_IconShoppingBasket2Line, {
  install: (app: App) => {
    app.component(_IconShoppingBasket2Line.name, _IconShoppingBasket2Line);
  }
});

export default IconShoppingBasket2Line;