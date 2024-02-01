import type { App } from 'vue';
import _IconReceiptFill from './icon-receipt-fill.vue';

const IconReceiptFill = Object.assign(_IconReceiptFill, {
  install: (app: App) => {
    app.component(_IconReceiptFill.name, _IconReceiptFill);
  }
});

export default IconReceiptFill;