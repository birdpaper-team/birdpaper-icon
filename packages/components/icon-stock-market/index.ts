import type { App } from 'vue';
import _IconStockMarket from './icon-stock-market.vue';

const IconStockMarket = Object.assign(_IconStockMarket, {
  install: (app: App) => {
    app.component(_IconStockMarket.name, _IconStockMarket);
  }
});

export default IconStockMarket;