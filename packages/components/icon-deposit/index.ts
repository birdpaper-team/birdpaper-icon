import type { App } from 'vue';
import _IconDeposit from './icon-deposit.vue';

const IconDeposit = Object.assign(_IconDeposit, {
  install: (app: App) => {
    app.component(_IconDeposit.name, _IconDeposit);
  }
});

export default IconDeposit;