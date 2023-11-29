import type { App } from 'vue';
import _IconExchangeDollarLine from './icon-exchange-dollar-line.vue';

const IconExchangeDollarLine = Object.assign(_IconExchangeDollarLine, {
  install: (app: App) => {
    app.component(_IconExchangeDollarLine.name, _IconExchangeDollarLine);
  }
});

export default IconExchangeDollarLine;