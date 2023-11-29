import type { App } from 'vue';
import _IconExchangeOne from './icon-exchange-one.vue';

const IconExchangeOne = Object.assign(_IconExchangeOne, {
  install: (app: App) => {
    app.component(_IconExchangeOne.name, _IconExchangeOne);
  }
});

export default IconExchangeOne;