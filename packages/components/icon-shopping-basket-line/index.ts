import type { App } from 'vue';
import _IconShoppingBasketLine from './icon-shopping-basket-line.vue';

const IconShoppingBasketLine = Object.assign(_IconShoppingBasketLine, {
  install: (app: App) => {
    app.component(_IconShoppingBasketLine.name, _IconShoppingBasketLine);
  }
});

export default IconShoppingBasketLine;