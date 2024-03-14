import type { App } from 'vue';
import _IconDiscountPercentFill from './icon-discount-percent-fill.vue';

const IconDiscountPercentFill = Object.assign(_IconDiscountPercentFill, {
  install: (app: App) => {
    app.component(_IconDiscountPercentFill.name, _IconDiscountPercentFill);
  }
});

export default IconDiscountPercentFill;