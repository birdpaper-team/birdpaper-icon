import type { App } from 'vue';
import _IconExchangeBoxFill from './icon-exchange-box-fill.vue';

const IconExchangeBoxFill = Object.assign(_IconExchangeBoxFill, {
  install: (app: App) => {
    app.component(_IconExchangeBoxFill.name, _IconExchangeBoxFill);
  }
});

export default IconExchangeBoxFill;