import type { App } from 'vue';
import _IconShoppingBag4Fill from './icon-shopping-bag-4-fill.vue';

const IconShoppingBag4Fill = Object.assign(_IconShoppingBag4Fill, {
  install: (app: App) => {
    app.component(_IconShoppingBag4Fill.name, _IconShoppingBag4Fill);
  }
});

export default IconShoppingBag4Fill;