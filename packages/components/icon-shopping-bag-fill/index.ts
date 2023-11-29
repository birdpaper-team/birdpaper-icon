import type { App } from 'vue';
import _IconShoppingBagFill from './icon-shopping-bag-fill.vue';

const IconShoppingBagFill = Object.assign(_IconShoppingBagFill, {
  install: (app: App) => {
    app.component(_IconShoppingBagFill.name, _IconShoppingBagFill);
  }
});

export default IconShoppingBagFill;