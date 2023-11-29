import type { App } from 'vue';
import _IconFinance from './icon-finance.vue';

const IconFinance = Object.assign(_IconFinance, {
  install: (app: App) => {
    app.component(_IconFinance.name, _IconFinance);
  }
});

export default IconFinance;