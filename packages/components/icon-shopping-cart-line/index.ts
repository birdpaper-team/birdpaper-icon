import type { App } from 'vue';
import _IconShoppingCartLine from './icon-shopping-cart-line.vue';

const IconShoppingCartLine = Object.assign(_IconShoppingCartLine, {
  install: (app: App) => {
    app.component(_IconShoppingCartLine.name, _IconShoppingCartLine);
  }
});

export default IconShoppingCartLine;