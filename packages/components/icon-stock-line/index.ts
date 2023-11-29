import type { App } from 'vue';
import _IconStockLine from './icon-stock-line.vue';

const IconStockLine = Object.assign(_IconStockLine, {
  install: (app: App) => {
    app.component(_IconStockLine.name, _IconStockLine);
  }
});

export default IconStockLine;