import type { App } from 'vue';
import _IconHealthProducts from './icon-health-products.vue';

const IconHealthProducts = Object.assign(_IconHealthProducts, {
  install: (app: App) => {
    app.component(_IconHealthProducts.name, _IconHealthProducts);
  }
});

export default IconHealthProducts;