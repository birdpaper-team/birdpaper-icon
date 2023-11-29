import type { App } from 'vue';
import _IconShoppingBag2Line from './icon-shopping-bag-2-line.vue';

const IconShoppingBag2Line = Object.assign(_IconShoppingBag2Line, {
  install: (app: App) => {
    app.component(_IconShoppingBag2Line.name, _IconShoppingBag2Line);
  }
});

export default IconShoppingBag2Line;