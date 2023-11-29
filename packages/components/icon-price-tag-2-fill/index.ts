import type { App } from 'vue';
import _IconPriceTag2Fill from './icon-price-tag-2-fill.vue';

const IconPriceTag2Fill = Object.assign(_IconPriceTag2Fill, {
  install: (app: App) => {
    app.component(_IconPriceTag2Fill.name, _IconPriceTag2Fill);
  }
});

export default IconPriceTag2Fill;