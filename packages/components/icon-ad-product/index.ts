import type { App } from 'vue';
import _IconAdProduct from './icon-ad-product.vue';

const IconAdProduct = Object.assign(_IconAdProduct, {
  install: (app: App) => {
    app.component(_IconAdProduct.name, _IconAdProduct);
  }
});

export default IconAdProduct;