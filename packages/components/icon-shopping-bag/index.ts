import type { App } from 'vue';
import _IconShoppingBag from './icon-shopping-bag.vue';

const IconShoppingBag = Object.assign(_IconShoppingBag, {
  install: (app: App) => {
    app.component(_IconShoppingBag.name, _IconShoppingBag);
  }
});

export default IconShoppingBag;