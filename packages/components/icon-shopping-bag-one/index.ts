import type { App } from 'vue';
import _IconShoppingBagOne from './icon-shopping-bag-one.vue';

const IconShoppingBagOne = Object.assign(_IconShoppingBagOne, {
  install: (app: App) => {
    app.component(_IconShoppingBagOne.name, _IconShoppingBagOne);
  }
});

export default IconShoppingBagOne;