import type { App } from 'vue';
import _IconMarketAnalysis from './icon-market-analysis.vue';

const IconMarketAnalysis = Object.assign(_IconMarketAnalysis, {
  install: (app: App) => {
    app.component(_IconMarketAnalysis.name, _IconMarketAnalysis);
  }
});

export default IconMarketAnalysis;