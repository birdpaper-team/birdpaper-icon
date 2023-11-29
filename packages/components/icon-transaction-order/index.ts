import type { App } from 'vue';
import _IconTransactionOrder from './icon-transaction-order.vue';

const IconTransactionOrder = Object.assign(_IconTransactionOrder, {
  install: (app: App) => {
    app.component(_IconTransactionOrder.name, _IconTransactionOrder);
  }
});

export default IconTransactionOrder;