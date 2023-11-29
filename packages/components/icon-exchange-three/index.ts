import type { App } from 'vue';
import _IconExchangeThree from './icon-exchange-three.vue';

const IconExchangeThree = Object.assign(_IconExchangeThree, {
  install: (app: App) => {
    app.component(_IconExchangeThree.name, _IconExchangeThree);
  }
});

export default IconExchangeThree;