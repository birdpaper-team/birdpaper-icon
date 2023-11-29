import type { App } from 'vue';
import _IconExchangeLine from './icon-exchange-line.vue';

const IconExchangeLine = Object.assign(_IconExchangeLine, {
  install: (app: App) => {
    app.component(_IconExchangeLine.name, _IconExchangeLine);
  }
});

export default IconExchangeLine;