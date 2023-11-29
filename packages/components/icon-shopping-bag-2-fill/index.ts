import type { App } from 'vue';
import _IconShoppingBag2Fill from './icon-shopping-bag-2-fill.vue';

const IconShoppingBag2Fill = Object.assign(_IconShoppingBag2Fill, {
  install: (app: App) => {
    app.component(_IconShoppingBag2Fill.name, _IconShoppingBag2Fill);
  }
});

export default IconShoppingBag2Fill;