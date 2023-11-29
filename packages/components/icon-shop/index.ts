import type { App } from 'vue';
import _IconShop from './icon-shop.vue';

const IconShop = Object.assign(_IconShop, {
  install: (app: App) => {
    app.component(_IconShop.name, _IconShop);
  }
});

export default IconShop;