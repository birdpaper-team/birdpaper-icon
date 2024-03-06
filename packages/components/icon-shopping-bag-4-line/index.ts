import type { App } from 'vue';
import _IconShoppingBag4Line from './icon-shopping-bag-4-line.vue';

const IconShoppingBag4Line = Object.assign(_IconShoppingBag4Line, {
  install: (app: App) => {
    app.component(_IconShoppingBag4Line.name, _IconShoppingBag4Line);
  }
});

export default IconShoppingBag4Line;