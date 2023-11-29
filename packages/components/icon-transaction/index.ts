import type { App } from 'vue';
import _IconTransaction from './icon-transaction.vue';

const IconTransaction = Object.assign(_IconTransaction, {
  install: (app: App) => {
    app.component(_IconTransaction.name, _IconTransaction);
  }
});

export default IconTransaction;