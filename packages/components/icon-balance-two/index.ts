import type { App } from 'vue';
import _IconBalanceTwo from './icon-balance-two.vue';

const IconBalanceTwo = Object.assign(_IconBalanceTwo, {
  install: (app: App) => {
    app.component(_IconBalanceTwo.name, _IconBalanceTwo);
  }
});

export default IconBalanceTwo;