import type { App } from 'vue';
import _IconExchangeCnyLine from './icon-exchange-cny-line.vue';

const IconExchangeCnyLine = Object.assign(_IconExchangeCnyLine, {
  install: (app: App) => {
    app.component(_IconExchangeCnyLine.name, _IconExchangeCnyLine);
  }
});

export default IconExchangeCnyLine;