import type { App } from 'vue';
import _IconExchangeTwo from './icon-exchange-two.vue';

const IconExchangeTwo = Object.assign(_IconExchangeTwo, {
  install: (app: App) => {
    app.component(_IconExchangeTwo.name, _IconExchangeTwo);
  }
});

export default IconExchangeTwo;