import type { App } from 'vue';
import _IconBalance from './icon-balance.vue';

const IconBalance = Object.assign(_IconBalance, {
  install: (app: App) => {
    app.component(_IconBalance.name, _IconBalance);
  }
});

export default IconBalance;