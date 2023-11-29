import type { App } from 'vue';
import _IconExchangeFundsLine from './icon-exchange-funds-line.vue';

const IconExchangeFundsLine = Object.assign(_IconExchangeFundsLine, {
  install: (app: App) => {
    app.component(_IconExchangeFundsLine.name, _IconExchangeFundsLine);
  }
});

export default IconExchangeFundsLine;