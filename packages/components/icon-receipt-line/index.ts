import type { App } from 'vue';
import _IconReceiptLine from './icon-receipt-line.vue';

const IconReceiptLine = Object.assign(_IconReceiptLine, {
  install: (app: App) => {
    app.component(_IconReceiptLine.name, _IconReceiptLine);
  }
});

export default IconReceiptLine;