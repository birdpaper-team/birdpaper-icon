import type { App } from 'vue';
import _IconPriceTagFill from './icon-price-tag-fill.vue';

const IconPriceTagFill = Object.assign(_IconPriceTagFill, {
  install: (app: App) => {
    app.component(_IconPriceTagFill.name, _IconPriceTagFill);
  }
});

export default IconPriceTagFill;