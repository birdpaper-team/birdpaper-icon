import type { App } from 'vue';
import _IconPriceTag3Fill from './icon-price-tag-3-fill.vue';

const IconPriceTag3Fill = Object.assign(_IconPriceTag3Fill, {
  install: (app: App) => {
    app.component(_IconPriceTag3Fill.name, _IconPriceTag3Fill);
  }
});

export default IconPriceTag3Fill;