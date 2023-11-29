import type { App } from 'vue';
import _IconStockFill from './icon-stock-fill.vue';

const IconStockFill = Object.assign(_IconStockFill, {
  install: (app: App) => {
    app.component(_IconStockFill.name, _IconStockFill);
  }
});

export default IconStockFill;