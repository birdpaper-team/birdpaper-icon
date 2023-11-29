import type { App } from 'vue';
import _IconShoppingMall from './icon-shopping-mall.vue';

const IconShoppingMall = Object.assign(_IconShoppingMall, {
  install: (app: App) => {
    app.component(_IconShoppingMall.name, _IconShoppingMall);
  }
});

export default IconShoppingMall;