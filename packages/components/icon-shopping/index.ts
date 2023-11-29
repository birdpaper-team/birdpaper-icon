import type { App } from 'vue';
import _IconShopping from './icon-shopping.vue';

const IconShopping = Object.assign(_IconShopping, {
  install: (app: App) => {
    app.component(_IconShopping.name, _IconShopping);
  }
});

export default IconShopping;