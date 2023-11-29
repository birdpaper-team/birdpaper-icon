import type { App } from 'vue';
import _IconExchangeBoxLine from './icon-exchange-box-line.vue';

const IconExchangeBoxLine = Object.assign(_IconExchangeBoxLine, {
  install: (app: App) => {
    app.component(_IconExchangeBoxLine.name, _IconExchangeBoxLine);
  }
});

export default IconExchangeBoxLine;