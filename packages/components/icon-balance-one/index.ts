import type { App } from 'vue';
import _IconBalanceOne from './icon-balance-one.vue';

const IconBalanceOne = Object.assign(_IconBalanceOne, {
  install: (app: App) => {
    app.component(_IconBalanceOne.name, _IconBalanceOne);
  }
});

export default IconBalanceOne;