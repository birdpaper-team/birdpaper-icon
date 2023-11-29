import type { App } from 'vue';
import _IconShoppingBag3Line from './icon-shopping-bag-3-line.vue';

const IconShoppingBag3Line = Object.assign(_IconShoppingBag3Line, {
  install: (app: App) => {
    app.component(_IconShoppingBag3Line.name, _IconShoppingBag3Line);
  }
});

export default IconShoppingBag3Line;