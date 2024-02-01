import type { App } from 'vue';
import _IconDiscountPercentLine from './icon-discount-percent-line.vue';

const IconDiscountPercentLine = Object.assign(_IconDiscountPercentLine, {
  install: (app: App) => {
    app.component(_IconDiscountPercentLine.name, _IconDiscountPercentLine);
  }
});

export default IconDiscountPercentLine;