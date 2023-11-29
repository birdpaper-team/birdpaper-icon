import type { App } from 'vue';
import _IconShoppingBagLine from './icon-shopping-bag-line.vue';

const IconShoppingBagLine = Object.assign(_IconShoppingBagLine, {
  install: (app: App) => {
    app.component(_IconShoppingBagLine.name, _IconShoppingBagLine);
  }
});

export default IconShoppingBagLine;