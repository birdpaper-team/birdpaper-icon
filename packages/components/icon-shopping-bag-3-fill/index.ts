import type { App } from 'vue';
import _IconShoppingBag3Fill from './icon-shopping-bag-3-fill.vue';

const IconShoppingBag3Fill = Object.assign(_IconShoppingBag3Fill, {
  install: (app: App) => {
    app.component(_IconShoppingBag3Fill.name, _IconShoppingBag3Fill);
  }
});

export default IconShoppingBag3Fill;