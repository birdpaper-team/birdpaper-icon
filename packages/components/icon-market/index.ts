import type { App } from 'vue';
import _IconMarket from './icon-market.vue';

const IconMarket = Object.assign(_IconMarket, {
  install: (app: App) => {
    app.component(_IconMarket.name, _IconMarket);
  }
});

export default IconMarket;