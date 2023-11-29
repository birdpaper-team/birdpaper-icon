import type { App } from 'vue';
import _IconPriceTag2Line from './icon-price-tag-2-line.vue';

const IconPriceTag2Line = Object.assign(_IconPriceTag2Line, {
  install: (app: App) => {
    app.component(_IconPriceTag2Line.name, _IconPriceTag2Line);
  }
});

export default IconPriceTag2Line;