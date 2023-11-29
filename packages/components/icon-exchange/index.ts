import type { App } from 'vue';
import _IconExchange from './icon-exchange.vue';

const IconExchange = Object.assign(_IconExchange, {
  install: (app: App) => {
    app.component(_IconExchange.name, _IconExchange);
  }
});

export default IconExchange;